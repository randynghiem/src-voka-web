import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../event-handlers/todos-event';

const TodoInput = ({ dispatch }) => {
  let input;

  const handleAddTodo = el => {
    const val = input.value.trim();
    if (val !== '') {
      dispatch(addTodo(val));
      input.value = '';
    }
  };

  return (
    <form>
      <div className="form-row mb-3 mt-3">
        <div className="col-8">
          <input type="text" className="form-control" placeholder="Todo Item" ref={el => (input = el)} />
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-secondary" onClick={handleAddTodo}>Add Item</button>
        </div>
      </div>
    </form>
  );
};

export default connect()(TodoInput);
