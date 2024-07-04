import { useLists } from "../contexts/ListsProvider";
import ListGroup from "react-bootstrap/ListGroup";
import SingleTask from "./SingleTask";

export default function Tasks() {
  const { lists, selectedList } = useLists();

  return (
    <ListGroup>
      {lists[selectedList].tasks.map((task, index) => (
        <ListGroup.Item
          variant="secondary"
          key={index}
          className="rounded-4 m-2 d-flex align-items-center"
        >
          <SingleTask task={task} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
