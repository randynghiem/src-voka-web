import YoutubeSearch from "../services/youtube-search-api";

/**
 * Actions and default state
 */
const API_KEY = process.env.REACT_APP_YOUTUBE_SEARCH_KEY;
const LOADING_QUERY_DATA = "search/LOADING_QUERY_DATA";
const LOADED_QUERY_DATA = "search/LOADED_QUERY_DATA";
const APPEND_QUERY_DATA = "search/APPEND_QUERY_DATA";
const CLEANUP = "dictation/search/CLEANUP";
const DEFAULT_STATE = {
  query: null,
  isLoading: false,
  hasError: false,
  nextPageToken: null,
  videos: []
};

/**
 * pass a function to Redux thunk for further processing
 */
export const triggerQuery = newQuery => {
  return (dispatch, getState) => {
    const { DictationSearch } = getState();

    if (DictationSearch.isLoading) return;

    // perform a search
    if (newQuery) {
      dispatch(loadingQueryData(newQuery));

      YoutubeSearch({
        key: API_KEY,
        q: newQuery,
        part: "snippet",
        type: "video",
        relevanceLanguage: "de",
        maxResults: 10
      })
        .then(data => {
          dispatch(loadedQueryData(data));
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    } else {
      dispatch(loadingQueryData(DictationSearch.query));

      YoutubeSearch({
        key: API_KEY,
        q: DictationSearch.query,
        part: "snippet",
        type: "video",
        relevanceLanguage: "de",
        maxResults: 10,
        pageToken: DictationSearch.nextPageToken
      })
        .then(data => {
          dispatch(appendQueryData(data));
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }
  };
};

export const loadingQueryData = query => ({ type: LOADING_QUERY_DATA, query });
export const loadedQueryData = data => ({ type: LOADED_QUERY_DATA, data });
export const appendQueryData = data => ({ type: APPEND_QUERY_DATA, data });
export const cleanup = () => ({ type: CLEANUP });

/**
 * Get the initial state of Dictation Search component
 * @returns A promise with the default state
 */
export const init = new Promise((resolve, reject) => {
  resolve(DEFAULT_STATE);
});

/**
 * reducer for dictation view
 */
export default function (state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case LOADING_QUERY_DATA:
      return {
        ...state,
        query: action.query,
        isLoading: true
      };
    case LOADED_QUERY_DATA:
      return {
        ...state,
        videos: action.data.items,
        nextPageToken: action.data.nextPageToken,
        isLoading: false
      };
    case APPEND_QUERY_DATA:
      return {
        ...state,
        videos: [...state.videos, ...action.data.items],
        nextPageToken: action.data.nextPageToken,
        isLoading: false
      };
    case CLEANUP:
      return DEFAULT_STATE;
    default:
      return state;
  }
}
