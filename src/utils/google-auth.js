/**
 * https://developers.google.com/identity/sign-in/web/reference
 */

/**
 * Private method to initialize google auth instance
 * @returns Promise of Google Auth Instance
 */
const getGoogleAuth = new Promise((resolve, reject) => {
  window.gapi.load("auth2", function () {
    window.gapi.auth2
      .init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_API,
        cookiepolicy: "single_host_origin"
      })
      .then(authIns => {
        resolve(authIns);
      })
      .catch(err => reject(err));
  });
});

/**
 * To check if the user signs in or not.
 * @returns A promise
 */
export const isSignedInGoogle = () => {
  console.log("isSignedIn");
  return new Promise((resolve, reject) => {
    getGoogleAuth
      .then(authIns => {
        if (authIns.isSignedIn.get()) {
          const user = authIns.currentUser.get();
          const profile = user.getBasicProfile();
          resolve(true, {
            uid: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail()
          });
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * To sign in with a google account
 * @returns GoogleUser if successful
 */
export const signInGoogle = () => {
  console.log("signed in");
  return new Promise((resolve, reject) => {
    getGoogleAuth
      .then(authIns => {
        authIns.signIn().then(user => {
          const profile = user.getBasicProfile();
          resolve({
            uid: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail()
          });
        });
      })
      .catch(err => reject(err));
  });
};

/**
 * To sign out the current user
 * @returns true if successful
 */
export const signOutGoogle = () => {
  console.log("sign out");
  return new Promise((resolve, reject) => {
    getGoogleAuth
      .then(authIns => {
        authIns.signOut().then(() => {
          resolve(true);
        });
      })
      .catch(err => reject(err));
  });
};