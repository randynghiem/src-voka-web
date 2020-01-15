let googleAuthPromise = null;

export const getGoogleAuth = () => {
  if (!googleAuthPromise) {
    // initialize object
    console.log("Initialize the object...")

    googleAuthPromise = new Promise((resolve, reject) => {
      window.gapi.load("auth2", function() {
        window.gapi.auth2
          .init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_API,
            cookiepolicy: "single_host_origin"
          })
          .then(authIns => {
            resolve(authIns);
          });
      });
    });
  }

  return googleAuthPromise;
};
