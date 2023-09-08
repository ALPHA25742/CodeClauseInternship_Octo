import { useRef } from "react";

export default function WelcomePage() {
  const windowWidth = useRef(window.innerWidth);
  const mobileView = windowWidth.current <= 768;
  return (
    <section className="col-8 h-100 text-center d-flex flex-column align-items-center justify-content-center">
      <h1 className=" display-4">Welcome to Octo =]</h1>
      {mobileView ? (
        <span>Click on the menu icon on top left to get started.</span>
        ) : (
          <span>A To-Dos handler.</span>
      )}
    </section>
  );
}
