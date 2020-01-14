export function getVoices() {
  return new Promise((resolve, reject) => {
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = window.speechSynthesis.getVoices();
      const gVoices = voices.filter(v => v.voiceURI === "Google Deutsch");

      if (gVoices.length === 1) {
        resolve(gVoices[0]);
      } else {
        reject("Not able to get any supported voice.");
      }
    };
  });
}

export function speakText({ voice, text, lang, rate }) {
  if (!voice && !text) {
    let u = new SpeechSynthesisUtterance();
    u.voice = voice;
    u.lang = lang;
    u.text = text;
    u.rate = rate;
    window.speechSynthesis.speak(u);
  }
}
