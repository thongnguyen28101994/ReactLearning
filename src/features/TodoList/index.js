import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
import TodoItem from "./TodoItem";
import queryString from "query-string";
const Items = [
  { id: 1, name: "Test1", status: "pending" },
  { id: 2, name: "Test2", status: "completed" },
  { id: 3, name: "Test3", status: "pending" },
];
console.log(Items);
export default function TodoList() {
  const location = useLocation();
  const [newItems, setNewItems] = useState([]);
  const [filteredItem, setFilteredItem] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });
  // useEffect(() => {}, [newItems]);
  function onFindHandler() {
    const newItems = Items.filter((x) => x.status === filteredItem);
    setNewItems(newItems);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoItem items={newItems} />

      <button onClick={onFindHandler}>Find All</button>
      <button onClick={onFindHandler}>Find Completed Item</button>
      <button onClick={onFindHandler}>Find Pending Item</button>
    </>
  );
}
