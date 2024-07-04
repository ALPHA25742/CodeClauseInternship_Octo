import { useEffect, useRef, useState } from "react";
import { useLists } from "../contexts/ListsProvider";

export default function SingleList({ listName, index, close }) {
  const { selectedList, removeList, updateListName, selectList } = useLists();
  const [editable, setEditable] = useState(false);
  const [updatedListName, setUpdatedListName] = useState(listName);
  const inputRef = useRef(null);
  const windowWidth = useRef(window.innerWidth);
  const mobileView = windowWidth.current <= 768;

  useEffect(() => {
    setUpdatedListName(listName);
  }, [listName]);

  const handleSubmit = () => {
    if (editable) {
      updateListName(index, updatedListName);
      setEditable(false);
    } else {
      setEditable(true);
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input
        type="text"
        className="form-control-plaintext"
        value={updatedListName}
        style={{ color: `${index == selectedList ? "black" : "white"}` }}
        onChange={(e) => setUpdatedListName(e.target.value)}
        readOnly={!editable}
        ref={inputRef}
        onClick={() => {
          if (mobileView) close();
          selectList(index);
        }}
      />
      <div className="btn ms-auto" onClick={handleSubmit}>
        {editable ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={`${index == selectedList ? "" : "currentColor"}`}
            className="bi bi-floppy"
            viewBox="0 0 16 16"
          >
            <path d="M11 2H9v3h2z" />
            <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={`${index == selectedList ? "" : "currentColor"}`}
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        )}
      </div>
      <div
        className="btn"
        onClick={(e) => {
          e.stopPropagation();
          removeList(listName);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill={`${index == selectedList ? "" : "currentColor"}`}
          className="bi bi-x-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </div>
    </>
  );
}
