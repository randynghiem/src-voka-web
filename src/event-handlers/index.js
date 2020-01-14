import { combineReducers } from 'redux';
import GoalState from './goal';
import DictationSearch from './dictation-search';
import DictationView from './dictation-view';

export default combineReducers({
  GoalState,
  DictationSearch,
  DictationView
});