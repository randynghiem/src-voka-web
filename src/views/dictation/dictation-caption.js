import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { changeToLine, loadCaption } from '../../event-handlers/dictation-view';
import YoutubeCaption from '../../components/youtube-caption';

const DictationCaption = ({ videoId, lines, curStart, onLineClick, onLoaded }) => {

  useEffect(() => {
    axios(`https://voka.azurewebsites.net/api/v1/captions/${videoId}/de`).then(
      response => onLoaded(videoId, response.data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <YoutubeCaption lines={lines} curStart={curStart} onLineClick={onLineClick} />
  );
};

export default connect(
  ({ DictationView }, ownProps) => ({
    lines: DictationView.lines,
    curStart: DictationView.curStart,
    videoId: ownProps.videoId
  }),
  dispatch => ({
    onLineClick: start => dispatch(changeToLine(start)),
    onLoaded: (videoId, lines) => dispatch(loadCaption({ videoId, lines }))
  })
)(DictationCaption);