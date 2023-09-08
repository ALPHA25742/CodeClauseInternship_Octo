import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useLists } from "../contexts/ListsProvider";

export default function Lists() {
  const { lists, selectedList, selectList } = useLists();
  // console.log(lists);
  return (
    <ListGroup>
      {
        (lists.length == 0
          ? <p className="text-center">U need to create lists to list ur To-Dos.</p>
          : lists.map((List, index) => (
              <ListGroup.Item
                action
                variant="dark"
                key={index}
                active={index == selectedList}
                onClick={() => selectList(index)}
                className="rounded-4 m-2"
              >
                {List.listName}
              </ListGroup.Item>
            )))
      }
      {/* {console.log(selectedList)} */}
    </ListGroup>
  );
}
