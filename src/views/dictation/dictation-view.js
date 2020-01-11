import './dictation.css';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { loadCaption } from "../../event-handlers/dictation-handlers";
import DictationPlayer from "./dictation-player";
import DictationCaption from "./dictation-caption";
import CommandBot from '../../components/youtube-bot/youtube-bot';

const Dictation = ({ match, dispatch }) => {
  const videoId = match.params.vid;
  useEffect(() => {
    axios(`https://voka.azurewebsites.net/api/v1/captions/${videoId}/de`).then(
      response =>
        dispatch(
          loadCaption({
            videoId: videoId,
            lines: response.data
          })
        )
    );
  }, []);

  return (
    <div className="container">
      <DictationPlayer />
      <DictationCaption />
      <CommandBot />
    </div>
  );
};

export default connect()(Dictation);
