import { combineReducers } from 'redux';
import GoalState from './goal';
import DictationSearch from './dictation-search';
import DictationView from './dictation-view';
import Auth from './auth';

export default combineReducers({
  Auth,
  GoalState,
  DictationSearch,
  DictationView
});