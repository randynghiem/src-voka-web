import React from "react";

export default function VoiceTest({}) {

  const talk = (voice, lang, text, rate) => {
    let u = new SpeechSynthesisUtterance();
    u.voice = voice;
    u.lang = lang;
    u.text = text;
    u.rate = rate;
    speechSynthesis.speak(u);
  }

  React.useEffect(() => {
    if(window.speechSynthesis){
      const voiceList = window.speechSynthesis.getVoices();
      if(voiceList && voiceList.length > 0){
        const deutschVoices = voiceList.filter( v => v.lang === 'de-DE');
        console.log(deutschVoices);
      }
    }
  }, []);

  return <div> Voice Test</div>;
}
