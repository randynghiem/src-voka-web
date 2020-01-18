import { combineReducers } from "redux";
import GoalState, { init as initializeGoal } from "./goal";
import DictationSearch, { init as InitializeDictationSearch } from "./dictation-search";
import DictationView, { init as InitializeDictationView } from "./dictation-view";
import Auth, { init as InitializeAuth } from "./auth";
import { getCache } from "../utils/local-storage";

export const initializeStore = new Promise((resolve, reject) => {
  Promise.all([InitializeAuth, initializeGoal, InitializeDictationSearch, InitializeDictationView]).then(
    values => {
      const initialState = {
        Auth: values[0],
        GoalState: values[1],
        DictationSearch: values[2],
        DictationView: values[3]
      };

      const cachedAuth = getCache();
      if (cachedAuth !== null) {
        initialState.Auth = cachedAuth.Auth;
      }

      resolve(initialState);
    }
  );
});

export default combineReducers({
  Auth,
  GoalState,
  DictationSearch,
  DictationView
});
