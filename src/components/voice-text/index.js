import React from "react";
import { parseText } from "../../utils/text-processing";

export default function VoiceText({ onPlay, onPause, onImport }) {
  const [playing, setPlaying] = React.useState(false);
  const [text, setText] = React.useState(process.env.REACT_APP_VOICE_TEXT_SAMPLE);

  const handleTyping = e => {
    setText(e.target.value);
  }

  const processText = e => {
    e.preventDefault();

    if (!text || !text.trim()) return;

    if (playing) {
      onPause && onPause();
    } else {
      const sentences = parseText(text);
      onPlay && onPlay(sentences);
    }
    setPlaying(!playing);
  };

  return (
    <form onSubmit={processText}>
      {!playing &&
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="voiceTextControl">Paste the text you want to listen!</label>
            <textarea
              className="form-control"
              name="voiceTextControl"
              id="voiceTextControl"
              rows="10"
              value={text}
              onChange={handleTyping}
            ></textarea>
          </div>
        </div>
      }

      <div className="form-row">
        <div className="form-group col-md-12">
          <button type="button" className="btn btn-info pl-3 pr-3 mr-3" onClick={() => onImport()}>
            <i className="fas fa-folder-open fa-lg"></i>
          </button>
          <button type="submit" className="btn btn-info pl-3 pr-3 mr-3">
            <i className={playing ? "fas fa-pause fa-lg" : "fas fa-play fa-lg"}></i>
          </button>
        </div>
      </div>
    </form>
  );
}
