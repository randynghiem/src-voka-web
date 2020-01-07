import YoutubeSearch from '../utils/youtube-search';

/**
 * Actions
 */
const API_KEY = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA";
const LOADED_QUERY_DATA = 'search/LOADED_QUERY_DATA';
const NAVIGATE_NEXT_PAGE = 'search/NAVIGATE_NEXT_PAGE';
const defaultState = {
  query: "",
  curren: -1,
  videos: []
}

/**
 * pass a function to Redux thunk for further processing
 */

export const triggerQuery = (query) => {
  return (dispatch) => {
      // perform a search
      YoutubeSearch({
        key: API_KEY,
        q: query,
        part: 'snippet',
        type: 'video',
        relevanceLanguage: "de"
      }).then(data => {
        // load data and dispatch further
        dispatch(loadedQueryData(data));
      }).catch(err => {
        console.log("Error: ", err);
      });
  }
};

export const loadedQueryData = (data) => ({
  type: LOADED_QUERY_DATA,
  payload: data
});

export const navigateNextPage = (page) => ({
  type: NAVIGATE_NEXT_PAGE,
  payload: page
});

/**
 * reducer
 */

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case LOADED_QUERY_DATA:
      return {
        ...state,
        videos: action.payload.items
      };
    default:
      return state;
  }
}