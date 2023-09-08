import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ListsContext = React.createContext();

export function useLists() {
  return useContext(ListsContext);
}

export function ListsProvider({ children }) {
  const { lists, setLists } = useLocalStorage();
  const [selectedList, setSelectedList] = useState(0);

  function selectList(n) {
    return setSelectedList(n);
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
    // console.log('called');
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

  function addList(newListName) {
    setLists((li) => {
      return [...li, { listName: newListName, tasks: [] }];
    });
  }

  return (
    <ListsContext.Provider
      value={{
        lists,
        setLists,
        addList,
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
