import React from 'react';

/**
 * Custom goal input with custom style
 * @param {*} props props object with onClick event handler
 */
export default function ({ onClick }) {
  const goalInput = React.useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(goalInput && goalInput.current.value){
      const val = goalInput.current.value.trim();
      onClick && onClick(val);
      goalInput.current.value = '';
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <div className="form-row mb-3 mt-3">
        <div className="col-8">
          <input type="text" className="form-control" placeholder="Todo Item" ref={goalInput} />
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-secondary">Add Item</button>
        </div>
      </div>
    </form>
  );
};