// initialize promise
const voicePromise = new Promise((resolve, reject) => {
  speechSynthesis.onvoiceschanged = function () {
    const voices = speechSynthesis.getVoices();
    const gVoices = voices.filter(v => v.name === "Google Deutsch");

    if (gVoices.length === 1) {
      resolve(gVoices[0]);
    } else {
      reject(null);
    }
  };
});

export const speakText = (text, lang = 'de-DE', rate = 0.8) => {
  if (text) {
    voicePromise.then(voice => {
      console.log("text: ", text);
      console.log("voice: ", voice);
      let u = new SpeechSynthesisUtterance();
      u.voice = voice;
      u.lang = lang;
      u.text = text;
      u.rate = rate;
      window.speechSynthesis.speak(u);
    });
  }
}
