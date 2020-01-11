import { combineReducers } from 'redux';
import GoalReducer from './goal-handlers';
import ytSearch from './dictation-handlers';

export default combineReducers({
  GoalReducer,
  ytSearch
});