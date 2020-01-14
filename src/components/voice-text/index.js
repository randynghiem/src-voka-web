import React from "react";
import { parseText } from "../../utils/text-processing";

export default function VoiceText({ onPlay, onRepeat, onImport }) {
  const textboxRef = React.useRef(null);

  React.useEffect(() => {
    if (process.env.REACT_APP_VOICE_TEXT_SAMPLE) {
      textboxRef.current.value = process.env.REACT_APP_VOICE_TEXT_SAMPLE;
    }
  }, []);

  const processText = e => {
    e.preventDefault();

    if (textboxRef.current && textboxRef.current.value) {
      const text = textboxRef.current.value;
      // parse text
      const sentences = parseText(text);

      // emit event
      onPlay && onPlay(sentences);
    }
  };

  return (
    <form onSubmit={processText}>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="voiceTextControl">Paste the text you want to listen!</label>
          <textarea
            ref={textboxRef}
            className="form-control"
            name="voiceTextControl"
            id="voiceTextControl"
            rows="10"
          ></textarea>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-12">
          <button type="button" className="btn btn-info pl-3 pr-3 mr-3" onClick={() => onImport()}>
            <i className="fas fa-folder-open fa-lg"></i>
          </button>

          <button type="submit" className="btn btn-info pl-3 pr-3 mr-3">
            <i className="fas fa-play fa-lg"></i>
          </button>

          <button type="button" className="btn btn-info pl-3 pr-3" onClick={() => onRepeat()}>
            <i className="fas fa-redo fa-lg"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
