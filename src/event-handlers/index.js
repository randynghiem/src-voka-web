import { combineReducers } from 'redux';
import filter from './goal-filter-event';
import todos from './goal-event';
import ytSearch from './dictation-events';

export default combineReducers({
  filter,
  todos,
  ytSearch
});