import { combineReducers } from 'redux';
import GoalState from './goal-handlers';
import DictationState from './dictation-handlers';

export default combineReducers({
  GoalState,
  DictationState
});