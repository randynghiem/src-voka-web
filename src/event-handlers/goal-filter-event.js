/**
 * actions and default values
 */
const FILTER_TODO = "filter/FILTER_TODO";
export const FilterType = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_DONE: "SHOW_DONE"
};
const defaultState = FilterType.SHOW_ALL;

/**
* action creator
*/
export const showAll = () => ({ type: FILTER_TODO, filter: FilterType.SHOW_ALL });
export const showActive = () => ({ type: FILTER_TODO, filter: FilterType.SHOW_ACTIVE });
export const showDone = () => ({ type: FILTER_TODO, filter: FilterType.SHOW_DONE });

/**
 * reducer
 */
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case FILTER_TODO:
      return action.filter;
    default:
      return state;
  }
}
