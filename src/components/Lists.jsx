import React, { useRef } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useLists } from "../contexts/ListsProvider";
import SingleList from "./SingleList";

export default function Lists({ close }) {
  const { lists, selectedList } = useLists();
  return (
    <ListGroup className="p-3 overflow-y-auto">
      {lists.length == 0 ? (
        <p className="text-center">U need to create lists to list ur To-Dos.</p>
      ) : (
        lists.map((List, index) => (
          <ListGroup.Item
            action
            variant="dark"
            key={index}
            active={index == selectedList}
            className="rounded-4 my-2 d-flex align-items-center"
          >
            <SingleList close={close} listName={List.listName} index={index} />
          </ListGroup.Item>
        ))
      )}
    </ListGroup>
  );
}
