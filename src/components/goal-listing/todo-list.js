import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todo-list-item';
import { FilterType } from '../../event-handlers/goal-filter-event';
import { toggleTodo } from '../../event-handlers/goal-event';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="list-group mb-3">
      {
        todos != null &&
        todos.map(todo => (
          <TodoItem key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))
      }
    </ul>
  );
}

const filterTodos = (todos, filter) => {
  switch (filter) {
    case FilterType.SHOW_ACTIVE:
      return todos.filter(todo => todo.done === false);
    case FilterType.SHOW_DONE:
      return todos.filter(todo => todo.done === true);
    default:
      return todos;
  }
};

export default connect(
  state => ({
    todos: filterTodos(state.todos, state.filter)
  }),
  dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
  })
)(TodoList);
