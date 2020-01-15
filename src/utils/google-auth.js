/**
 * https://developers.google.com/identity/sign-in/web/reference
 */
let googleAuthPromise = null;

/**
 * Private method to initialize google auth instance
 * @returns Promise of Google Auth Instance
 */
const getGoogleAuth = () => {
  if (!googleAuthPromise) {
    googleAuthPromise = new Promise((resolve, reject) => {
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
  }

  return googleAuthPromise;
};

/**
 * To check if the user signs in or not.
 * @returns A promise
 */
export const isSignedInGoogle = () => {
  console.log("isSignedIn");
  return new Promise((resolve, reject) => {
    getGoogleAuth()
      .then(authIns => {
        resolve(authIns.isSignedIn.get());
      })
      .catch(err => reject(err));
  })
}

/**
 * To sign in with a google account
 * @returns GoogleUser if successful
 */
export const signInGoogle = () => {
  console.log("signed in");
  return new Promise((resolve, reject) => {
    getGoogleAuth()
      .then(authIns => {
        authIns.signIn().then(user => {
          const profile = user.getBasicProfile();
          resolve({
            uid: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail()
          });
        })
      })
      .catch(err => reject(err));
  });
}

/**
 * To sign out the current user
 * @returns true if successful
 */
export const signOutGoogle = () => {
  console.log("sign out");
  return new Promise((resolve, reject) => {
    getGoogleAuth()
      .then(authIns => {
        authIns.signOut().then(() => {
          resolve(true);
        });
      })
      .catch(err => reject(err));
  });
}

/**
 * To get the current google user if already logged in
 */
export const getCurrentGoogleUser = () => {
  console.log("get current user");
  return new Promise((resolve, reject) => {
    getGoogleAuth()
      .then(authIns => {
        resolve(authIns.currentUser.get());
      })
      .catch(err => reject(err));
  });
}