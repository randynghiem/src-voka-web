import YoutubeSearch from "../utils/youtube-search";

/**
 * Actions
 */
const API_KEY = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA";
const LOADED_QUERY_DATA = "search/LOADED_QUERY_DATA";
const NAVIGATE_NEXT_PAGE = "search/NAVIGATE_NEXT_PAGE";
const DT_LOAD_CAPTION = "dictation/DT_LOAD_CAPTION";
const DT_JUMP_TO_LINE = "dictation/DT_JUMP_TO_LINE";
const DT_CHANGE_TO_LINE = "dictation/DT_CHANGE_TO_LINE";

const defaultState = {
  current: -1,
  videos: [],
  caption: {
    videoId: null,
    lines: null,
    markers: null,
    playAt: null,
    curStart: null
  }
};

/**
 * pass a function to Redux thunk for further processing
 */
export const triggerQuery = query => {
  return dispatch => {
    // perform a search
    YoutubeSearch({
      key: API_KEY,
      q: query,
      part: "snippet",
      type: "video",
      relevanceLanguage: "de"
    })
      .then(data => {
        // load data and dispatch further
        dispatch(loadedQueryData(data));
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
};

export const loadedQueryData = data => ({
  type: LOADED_QUERY_DATA,
  payload: data
});

export const navigateNextPage = page => ({
  type: NAVIGATE_NEXT_PAGE,
  payload: page
});

export const loadCaption = ({ videoId, lines }) => ({
  type: DT_LOAD_CAPTION,
  videoId,
  lines
});

export const jumpToLine = start => ({
  type: DT_JUMP_TO_LINE,
  start: start
});

export const changeToLine = start => ({
  type: DT_CHANGE_TO_LINE,
  start
});

const formatStartTime = (start) => {
  let secondTotal = Math.floor(start);
  let seconds = secondTotal % 60;
  let minutes = Math.floor(secondTotal / 60);

  if (minutes < 10) {
    return '0' + minutes + ':' + ('0' + seconds).slice(-2);
  } else {
    return minutes + ':' + ('0' + seconds).slice(-2);
  }
};

const markLines = (lines, cur) => {
  return lines.map(line => ({
    ...line,
    current: line.start === cur ? 'current' : ''
  }))
};

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
    case DT_LOAD_CAPTION:
      const lines = action.lines.map(i => ({ ...i, formattedStart: formatStartTime(i.start) }));
      lines[0].current = 'current';
      return {
        ...state,
        caption: {
          ...state.caption,
          videoId: action.videoId,
          lines: lines,
          markers: action.lines.map(i => i.start)
        }
      };
    case DT_JUMP_TO_LINE:
      return {
        ...state,
        caption: {
          ...state.caption,
          curStart: action.start,
          lines: markLines(state.caption.lines, action.start)
        }
      };
    case DT_CHANGE_TO_LINE:
      return {
        ...state,
        caption: {
          ...state.caption,
          playAt: action.start,
          curStart: action.start,
          lines: markLines(state.caption.lines, action.start)
        }
      };
    default:
      return state;
  }
}
