import { getGoogleAuth } from "../utils/google-auth";
/**
 * Action descriptions
 */
const AUTHENTICATING_WITH_GOOGLE = "auth/AUTHENTICATING_WITH_GOOGLE";
const SIGNED_IN_WITH_GOOGLE = "auth/SIGNED_IN_WITH_GOOGLE";
const SIGNED_OUT_WITH_GOOGLE = "auth/SIGNED_OUT_WITH_GOOGLE";
const CLEANUP = "auth/CLEANUP";

const DEFAULT_STATE = {
  provider: null,
  ready: true,
  isAuthenticated: false,
  uid: null,
  name: null,
  email: null
};

/**
 * Action creators
 */
export const signInOrOut = provider => {
  return (dispatch, getState) => {
    // check if the user is authenticated
    const { Auth } = getState();

    // if not ready, skip to avoid duplicated authentication
    if (!Auth.ready) return;

    dispatch(authenticatingWithGoogle());

    if (provider === "google") {
      getGoogleAuth().then(authIns => {
        console.log("GoogleAuth: ", authIns);
      })
    }
  };
};

export const authenticatingWithGoogle = () => ({ type: AUTHENTICATING_WITH_GOOGLE });
export const signedInWithGoogle = payload => ({ type: SIGNED_IN_WITH_GOOGLE, payload });

/**
 * Reducers
 */

export default function Auth(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case AUTHENTICATING_WITH_GOOGLE:
      return {
        ...state,
        ready: false
      };
    case SIGNED_IN_WITH_GOOGLE:
      return {
        ...state,
        ready: true
      };
    case CLEANUP:
      return DEFAULT_STATE;
    default:
      return state;
  }
}
