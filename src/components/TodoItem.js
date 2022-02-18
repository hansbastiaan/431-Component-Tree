import React, { useState } from "react";

const ToDoItem = (props) => {
  const handleClick = () => {};

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.todo}</li>
    </div>
  );
};

export default ToDoItem;
