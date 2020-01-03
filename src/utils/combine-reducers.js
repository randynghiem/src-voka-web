import { combineReducers } from 'redux';
import filter from '../event-handlers/filter-event';
import todos from '../event-handlers/todos-event';

export default combineReducers({
  filter,
  todos
});