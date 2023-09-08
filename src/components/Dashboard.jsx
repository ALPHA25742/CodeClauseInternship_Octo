import { useRef } from "react";
import OpenList from "./OpenList";
import Sidebar from "./Sidebar";
import { useLists } from "../contexts/ListsProvider";
import WelcomePage from "./WelcomePage";

export default function Dashboard() {
  const windowWidth = useRef(window.innerWidth);
  const mobileView = windowWidth.current <= 768;
  const {lists}=useLists()
  return (
    <section className="container-fluid vh-100">
      <section className="row h-100">
      {lists.length!=0?<OpenList/>:<WelcomePage/>}
      <Sidebar/>
      </section>
      {/* sidebar will be on right side */}
    </section>
  )
}
