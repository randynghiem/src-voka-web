import React from "react";

export default function VoiceText(props) {
  const processText = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={processText}>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="voiceTextControl">
            Paste the text you want to listen!
          </label>
          <textarea
            className="form-control"
            name="voiceTextControl"
            id="voiceTextControl"
            rows="10"
          ></textarea>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-12">
        <button type="button" className="btn btn-info pl-4 pr-4 mr-3">
            <i className="fas fa-folder-open fa-2x"></i>
          </button>

          <button type="submit" className="btn btn-info pl-4 pr-4 mr-3">
            <i className="fas fa-play fa-2x"></i>
          </button>

          <button type="button" className="btn btn-info pl-4 pr-4">
            <i className="fas fa-redo fa-2x"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
