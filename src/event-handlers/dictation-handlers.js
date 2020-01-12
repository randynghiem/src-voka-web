import YoutubeSearch from "../services/youtube-search-api";
import { formatStartTime, markLines } from "../utils/list";

/**
 * Actions and default state
 */
const API_KEY = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA";
const LOADING_QUERY_DATA = "search/LOADING_QUERY_DATA";
const LOADED_QUERY_DATA = "search/LOADED_QUERY_DATA";
const APPEND_QUERY_DATA = "search/APPEND_QUERY_DATA";
const NAVIGATE_NEXT_PAGE = "search/NAVIGATE_NEXT_PAGE";
const DT_LOAD_CAPTION = "dictation/DT_LOAD_CAPTION";
const DT_JUMP_TO_LINE = "dictation/DT_JUMP_TO_LINE";
const DT_CHANGE_TO_LINE = "dictation/DT_CHANGE_TO_LINE";
const DT_DISPATCH_COMMAND = "dictation/DT_DISPATCH_COMMAND";
const CLEANUP_DICTATION_SEARCH = 'dictation/CLEANUP_DICTATION_SEARCH';
const CLEANUP_DICTATION_VIEW = 'dictation/CLEANUP_DICTATION_VIEW';
const DEFAULT_STATE = {
  search: {
    query: null,
    isLoading: false,
    hasError: false,
    nextPageToken: null,
    videos: []
  },
  view: {
    videoId: null,
    lines: null,
    markers: null,
    playAt: null,
    curStart: null,
    command: null
  }
};

/**
 * pass a function to Redux thunk for further processing
 */
export const triggerQuery = (newQuery) => {
  return (dispatch, getState) => {
    const { DictationState } = getState();

    if (DictationState.search.isLoading) return;

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
        .catch(err => { console.log("Error: ", err); });

    } else {
      dispatch(loadingQueryData(DictationState.search.query));

      YoutubeSearch({
        key: API_KEY,
        q: DictationState.search.query,
        part: "snippet",
        type: "video",
        relevanceLanguage: "de",
        maxResults: 10,
        pageToken: DictationState.search.nextPageToken
      })
        .then(data => {
          dispatch(appendQueryData(data));
        })
        .catch(err => { console.log("Error: ", err); });
    }
  };
};

export const loadingQueryData = query => ({ type: LOADING_QUERY_DATA, query: query });
export const loadedQueryData = data => ({ type: LOADED_QUERY_DATA, payload: data });
export const appendQueryData = data => ({ type: APPEND_QUERY_DATA, payload: data });
export const navigateNextPage = page => ({ type: NAVIGATE_NEXT_PAGE, payload: page });
export const loadCaption = ({ videoId, lines }) => ({ type: DT_LOAD_CAPTION, videoId, lines });
export const jumpToLine = start => ({ type: DT_JUMP_TO_LINE, start: start });
export const changeToLine = start => ({ type: DT_CHANGE_TO_LINE, start });
export const dispatchCommand = (command) => ({ type: DT_DISPATCH_COMMAND, command: command });
export const cleanupDictationSearch = () => ({ type: CLEANUP_DICTATION_SEARCH });
export const cleanupDictationView = () => ({ type: CLEANUP_DICTATION_VIEW });

/**
 * reducer for dictation view
 */
export default function (state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case LOADING_QUERY_DATA:
      return {
        ...state,
        search: {
          ...state.search,
          query: action.query,
          isLoading: true
        }
      };
    case LOADED_QUERY_DATA:
      return {
        ...state,
        search: {
          ...state.search,
          videos: action.payload.items,
          nextPageToken: action.payload.nextPageToken,
          isLoading: false
        }
      };
    case APPEND_QUERY_DATA:
      return {
        ...state,
        search: {
          ...state.search,
          videos: [...state.search.videos, ...action.payload.items],
          nextPageToken: action.payload.nextPageToken,
          isLoading: false
        }
      };
    case DT_LOAD_CAPTION:
      const lines = action.lines.map(i => ({ ...i, formattedStart: formatStartTime(i.start) }));
      lines[0].current = 'current';
      return {
        ...state,
        view: {
          ...state.view,
          videoId: action.videoId,
          lines: lines,
          markers: action.lines.map(i => i.start)
        }
      };
    case DT_JUMP_TO_LINE:
      if (!state.view.lines) return;
      return {
        ...state,
        view: {
          ...state.view,
          curStart: action.start,
          lines: markLines(state.view.lines, action.start)
        }
      };
    case DT_CHANGE_TO_LINE:
      if (!state.view.lines) return;
      return {
        ...state,
        view: {
          ...state.view,
          playAt: action.start + "|" + (new Date()).getTime(),
          curStart: action.start,
          lines: markLines(state.view.lines, action.start)
        }
      };
    case DT_DISPATCH_COMMAND:
      return {
        ...state,
        view: {
          ...state.view,
          command: action.command + "|" + (new Date()).getTime()
        }
      };
    case CLEANUP_DICTATION_VIEW:
      return {
        ...state,
        view: {
          ...DEFAULT_STATE.view
        }
      }
    case CLEANUP_DICTATION_SEARCH:
      return {
        ...state,
        search: {
          ...DEFAULT_STATE.search
        }
      }
    default:
      return state;
  }
}