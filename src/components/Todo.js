import React from "react";

function Todo(props) {
  const completTodo = () => {
    props.complete(props.index);
  };
  return (
    <li>
      <button onClick={completTodo}>
        {props.todo.iscomplete ? "undo" : "complete"}
      </button>
      <button
        onClick={() => {
          props.deleteitem(props.index);
        }}
      >
        {" "}
        Delelte
      </button>
      <span
        style={{
          color: "blue",
          textDecoration: props.todo.iscomplete ? "line-through" : "none"
        }}
      >
        {props.todo.text}
      </span>
    </li>
  );
}

export default Todo;
