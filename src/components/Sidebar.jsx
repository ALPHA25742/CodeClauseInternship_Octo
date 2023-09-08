import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useRef, useState } from "react";
import Lists from "./Lists";
import { useLists } from "../contexts/ListsProvider";
export default function Sidebar() {
  const [show, setShow] = useState(false);
  const { addList } = useLists();
  const newListName = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function addNewList(e) {
    e.preventDefault();
    addList(newListName.current.value);
    handleClose();
  }
  return (
    <section className="col-4 d-flex flex-column justify-content-between bg-secondary">
      <h1 className="display-4 text-center my-5">Lists</h1>
      <Lists />
      <button className="btn btn-outline-light rounded-4 mb-5" onClick={handleShow}>
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
        New List
      </button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>List name pls.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addNewList}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Here we go!"
                autoFocus
                ref={newListName}
                required
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="light">
              Add
            </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
