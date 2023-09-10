import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ListsContext = React.createContext();

export function useLists() {
  return useContext(ListsContext);
}

export function ListsProvider({ children }) {
  const { lists, setLists } = useLocalStorage();
  const [selectedList, setSelectedList] = useState(0);

  const selectList = (n) => {
    setSelectedList(n);
  };

  function addList(newListName) {
    setLists((li) => {
      return [...li, { listName: newListName, tasks: [] }];
    });
  }

  function removeList(listName) {
    if (selectedList == lists.length - 1) setSelectedList(0);
    setLists((prevLists) => {
      return prevLists.filter((li) => {
        return li.listName != listName;
      });
    });
  }

  function addTask(task) {
    setLists((prevLists) => {
      return prevLists.map((li) => {
        if (li.listName === lists[selectedList].listName) {
          return {
            ...li,
            tasks: [...li.tasks, task],
          };
        }
        return li;
      });
    });
  }

  function removeTask(task) {
    setLists((prevLists) => {
      return prevLists.map((li) => {
        if (li.listName === lists[selectedList].listName) {
          return {
            ...li,
            tasks: li.tasks.filter((t) => t != task),
          };
        }
        return li;
      });
    });
  }

  return (
    <ListsContext.Provider
      value={{
        lists,
        addList,
        removeList,
        selectList,
        selectedList,
        addTask,
        removeTask,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
}
