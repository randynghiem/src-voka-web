import { formatStartTime, markLines } from "../utils/list";

/**
 * Actions and default state
 */
const LOAD_CAPTION = "dictation/view/LOAD_CAPTION";
const JUMP_TO_LINE = "dictation/view/JUMP_TO_LINE";
const CHANGE_TO_LINE = "dictation/view/CHANGE_TO_LINE";
const DISPATCH_COMMAND = "dictation/view/DISPATCH_COMMAND";
const CLEANUP = "dictation/view/CLEANUP";
const DEFAULT_STATE = {
  videoId: null,
  lines: null,
  markers: null,
  playAt: null,
  curStart: null,
  command: null
};

/**
 * pass a function to Redux thunk for further processing
 */
export const loadCaption = ({ videoId, lines }) => ({ type: LOAD_CAPTION, videoId, lines });
export const jumpToLine = start => ({ type: JUMP_TO_LINE, start });
export const changeToLine = start => ({ type: CHANGE_TO_LINE, start });
export const dispatchCommand = command => ({ type: DISPATCH_COMMAND, command });
export const cleanup = () => ({ type: CLEANUP });

/**
 * Get the initial state of Dictation View component
 * @returns A promise with the default state
 */
export const init = () =>
  new Promise((resolve, reject) => {
    resolve(DEFAULT_STATE);
  });

/**
 * reducer for dictation view
 */
export default function(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case LOAD_CAPTION:
      const lines = action.lines.map(i => ({
        ...i,
        formattedStart: formatStartTime(i.start)
      }));
      lines[0].current = "current";
      return {
        ...state,
        videoId: action.videoId,
        lines: lines,
        markers: action.lines.map(i => i.start)
      };
    case JUMP_TO_LINE:
      if (!state.lines) return;
      return {
        ...state,
        curStart: action.start,
        lines: markLines(state.lines, action.start)
      };
    case CHANGE_TO_LINE:
      if (!state.lines) return;
      return {
        ...state,
        playAt: action.start + "|" + new Date().getTime(),
        curStart: action.start,
        lines: markLines(state.lines, action.start)
      };
    case DISPATCH_COMMAND:
      return {
        ...state,
        command: action.command + "|" + new Date().getTime()
      };
    case CLEANUP:
      return DEFAULT_STATE;
    default:
      return state;
  }
}
