/**
 * actions
 */
const TOGGLE_GOAL = "goals/TOGGLE_GOAL";
const ADD_GOAL = "goals/ADD_GOAL";
const FILTER_GOAL = "goals/FILTER_GOAL";
const CLEANUP = 'goals/CLEANUP';
export const FilterType = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_DONE: "SHOW_DONE"
};
const DEFAULT_STATE = {
  goals: [],
  filter: FilterType.SHOW_ALL
};

let goalCount = 0;

/**
 * action creator
 */
export const toggleGoal = id => ({ type: TOGGLE_GOAL, id });
export const addGoal = text => ({ type: ADD_GOAL, id: goalCount++, done: false, text });
export const filterGoal = (filter) => ({ type: FILTER_GOAL, filter });
export const cleanup = () => ({ type: CLEANUP });

/**
 * reducer
 */
export default function reducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case TOGGLE_GOAL:
      return {
        ...state,
        goals: state.goals.map(goal => goal.id === action.id ? { ...goal, done: !goal.done } : goal)
      };
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, { id: action.id, done: false, text: action.text }]
      };
    case FILTER_GOAL:
      return {
        ...state,
        filter: action.filter
      };
    case CLEANUP:
      return DEFAULT_STATE;
    default:
      return state;
  }
};