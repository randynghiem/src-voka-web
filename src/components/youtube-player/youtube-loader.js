import loadScript from "load-script2";

let yt = null;
export const init = () => {
  if (!yt) {
    yt = new Promise((resolve, reject) => {
      if (typeof window.YT === "object" &&
        typeof window.YT.ready === "function") {
        window.YT.ready(() => {
          resolve(window.YT);
        });
        return;
      }
      loadScript("https://www.youtube.com/iframe_api").then(() => {
        window.YT.ready(() => {
          resolve(window.YT);
        });
      }, err => {
        reject(err);
      });
    });
  }
  return yt;
};
