import { signInGoogle, signOutGoogle } from "../utils/google-auth";
/**
 * Action descriptions
 */
const AUTHENTICATING_WITH_GOOGLE = "auth/AUTHENTICATING_WITH_GOOGLE";
const SIGNED_IN_WITH_GOOGLE = "auth/SIGNED_IN_WITH_GOOGLE";
const SIGNED_OUT_WITH_GOOGLE = "auth/SIGNED_OUT_WITH_GOOGLE";

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
      if (Auth.isAuthenticated) {
        signOutGoogle()
          .then(result => {
            dispatch(signedOutWithGoogle());
          })
          .catch(err => console.log(err));
      } else {
        signInGoogle()
          .then(user => {
            dispatch(signedInWithGoogle(user));
          })
          .catch(err => console.log(err));
      }
    }
  };
};

export const authenticatingWithGoogle = () => ({ type: AUTHENTICATING_WITH_GOOGLE });
export const signedInWithGoogle = payload => ({ type: SIGNED_IN_WITH_GOOGLE, payload });
export const signedOutWithGoogle = () => ({ type: SIGNED_OUT_WITH_GOOGLE });

/**
 * Handle authentication
 */
export default function Auth(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case AUTHENTICATING_WITH_GOOGLE:
      return {
        ...state,
        provider: "google",
        ready: false
      };
    case SIGNED_IN_WITH_GOOGLE:
      return {
        ...state,
        ready: true,
        isAuthenticated: true,
        ...action.payload
      };
    case SIGNED_OUT_WITH_GOOGLE:
      return DEFAULT_STATE;
    default:
      return state;
  }
}
