import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [lists, setLists] = useState(() => {
    const jsonValue = localStorage.getItem("lists");
    if (jsonValue != null && jsonValue != "undefined")
      return JSON.parse(jsonValue);
    else return []
  });
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(lists))
  },[lists])
  return {lists,setLists}
}
