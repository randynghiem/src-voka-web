//compose different todo components
import React from 'react';
import TodoInput from '../../components/goal-input';
import TodoList from '../../components/goal-listing/todo-list';
import TodoFooter from '../../components/goal-listing/todo-footer';

const Todo = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          <TodoInput />
          <TodoList />
          <TodoFooter />
        </div>
      </div>
    </div>
  );
};

export default Todo;