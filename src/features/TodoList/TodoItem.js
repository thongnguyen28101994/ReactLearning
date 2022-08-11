import React from "react";

export default function TodoItem({ items }) {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className={item.status}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
