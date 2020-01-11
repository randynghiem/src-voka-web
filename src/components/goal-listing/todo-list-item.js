import React from 'react';

const TodoItem = ({ text, done, onClick }) => {

  let doneLabel = done ? ' list-group-item-success' : '';

  return (
    <li className={"list-group-item d-flex justify-content-between align-items-center" + doneLabel}
      onClick={onClick}>
      {text}
      <span className="badge badge-secondary badge-pill">New</span>
    </li>
  );
};

export default TodoItem;