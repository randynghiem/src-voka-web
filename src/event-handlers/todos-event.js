/**
 * actions
 */
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const ADD_TODO = "todos/ADD_TODO";
const defaultState = [];
let itemCount = 0;

/**
 * action creator
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const addTodo = text => ({
  type: ADD_TODO,
  id: itemCount++,
  done: false,
  text
});

/**
 * reducer
 */
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          done: false,
          text: action.text
        }
      ];
    default:
      return state;
  }
};
