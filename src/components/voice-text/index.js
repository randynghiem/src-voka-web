import React from "react";
import { parseText } from "../../utils/text-processing";

export default function VoiceText({ onPlay, onRepeat, onImport }) {
  const textboxRef = React.useRef(null);

  const sample = 'Dazu kommt ein sogenannter "Mechanismus für einen gerechten Übergang". Von der Leyen will damit Regionen, die beispielsweise stark von der Kohleverstromung abhängen, beim Strukturwandel helfen. Am Dienstagnachmittag diskutiert das Europaparlament, das zuletzt reichlich reißerisch den "Klimanotstand" ausgerufen hatte, über die Pläne, für Mittwoch ist eine Resolution geplant.';

  React.useEffect(() => {
    textboxRef.current.value = sample;
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
          <label htmlFor="voiceTextControl">
            Paste the text you want to listen!
          </label>
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
          <button type="button" className="btn btn-info pl-3 pr-3 mr-3">
            <i className="fas fa-folder-open fa-lg"></i>
          </button>

          <button type="submit" className="btn btn-info pl-3 pr-3 mr-3">
            <i className="fas fa-play fa-lg"></i>
          </button>

          <button type="button" className="btn btn-info pl-3 pr-3">
            <i className="fas fa-redo fa-lg"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
