import React, { useRef } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useLists } from "../contexts/ListsProvider";

export default function Lists({ close }) {
  const { lists, selectedList, selectList, removeList } = useLists();
  const windowWidth = useRef(window.innerWidth);
  const mobileView = windowWidth.current <= 768;
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
            onClick={() => {
              if (mobileView) close();
              selectList(index);
            }}
            className="rounded-4 my-2 d-flex align-items-center"
          >
            {List.listName}
            <div className="btn ms-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={`${index == selectedList ? "" : "currentColor"}`}
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
                onClick={(e)=>{
                  e.stopPropagation()
                  removeList(List.listName)}}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          </ListGroup.Item>
        ))
      )}
      {/* {console.log(selectedList)} */}
    </ListGroup>
  );
}
