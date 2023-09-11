import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useLists } from "../contexts/ListsProvider";
import Tasks from "./Tasks";
import { useRef, useState } from "react";

export default function OpenList() {
  const { lists, selectedList, addTask } = useLists();
  const [show, setShow] = useState(false);
  const newTask = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleSubmit(e) {
    e.preventDefault();
    handleClose();
    addTask(newTask.current.value);
  }
  const windowWidth = useRef(window.innerWidth);
  const mobileView = windowWidth.current <= 768;

  return (
    <section
      className={`${
        mobileView ? "flex-grow-1" : "col-md-8"
      } d-flex flex-column`}
    >
      <section className="d-flex flex-grow-1 p-3 pt-5">
        <h1 className="d-none">
          {/* {lists.length != 0 && lists[selectedList].listName} */}
        </h1>
        <article className="flex-grow-1 align-self-center bg-secondary rounded-4 p-3 overflow-y-auto">
          {lists[selectedList].tasks.length != 0 ? (
            <Tasks />
          ) : (
            <span className="text-center d-block">
              Let's get those tasks stacked and done ASAP!
            </span>
          )}
        </article>
      </section>
      <button
        className="btn btn-light rounded-4 w-50 align-self-center my-5"
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Add Task
      </button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task pls.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="d-flex flex-column">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Best of luck!"
                autoFocus
                ref={newTask}
                className="rounded-4"
              />
            </Form.Group>
            <Button type="submit" variant="light" className=" w-50 align-self-center rounded-4">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
}
