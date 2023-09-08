import { useLists } from "../contexts/ListsProvider";
import ListGroup from "react-bootstrap/ListGroup";

export default function Tasks() {
  const { lists, selectedList, removeTask } = useLists();
  return (
    <ListGroup>
      {lists[selectedList].tasks.map((task, index) => (
          <ListGroup.Item
            variant="secondary"
            key={index}
            className="rounded-4 m-2 d-flex align-items-center"
          >
            {task}
            <div className="btn ms-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check2-circle"
                viewBox="0 0 16 16"
                onClick={() => removeTask(task)}
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}
