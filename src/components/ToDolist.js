import React from "react";
import Todo from "./Todo";

const ToDolsit = props => {
  return (
    <ul>
      {props.todos.map((todo, i) => (
        <Todo
          key={i}
          todo={todo}
          complete={props.complete}
          index={i}
          deleteitem={props.deleteitem}
        />
      ))}
    </ul>
  );
};

export default ToDolsit;
