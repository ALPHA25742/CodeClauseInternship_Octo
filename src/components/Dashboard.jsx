import { useRef, useState } from "react";
import OpenList from "./OpenList";
import Sidebar from "./Sidebar";
import { useLists } from "../contexts/ListsProvider";
import WelcomePage from "./WelcomePage";
import MobileSidebar from "./MobileSidebar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Dashboard() {
  const [show, setShow] = useState(false);
  const windowWidth = useRef(window.innerWidth);
  const mobileView = windowWidth.current <= 768;
  const { lists } = useLists();

  return (
    <section className="container-fluid" style={{ height: "100dvh" }}>
      <section className={`${mobileView ? "d-flex flex-column" : "row"} h-100`}>
        {/* the burger menu button */}
        <div className="d-md-none align-self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-list my-2 btn"
            viewBox="0 0 16 16"
            onClick={() => setShow(true)}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        {lists.length != 0 ? <OpenList /> : <WelcomePage />}
        <Sidebar />
      </section>
      <Offcanvas
        placement="end"
        show={show}
        onHide={() => setShow(false)}
        className="bg-secondary"
        scroll="true"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileSidebar close={() => setShow(false)} />
        </Offcanvas.Body>
      </Offcanvas>
      {/* sidebar will be on right side */}
    </section>
  );
}
