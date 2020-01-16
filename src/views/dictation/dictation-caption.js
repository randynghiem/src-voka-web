import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { changeToLine, loadCaption } from "../../event-handlers/dictation-view";
import YoutubeCaption from "../../components/youtube-caption";
import PropTypes from 'prop-types';

const DictationCaption = ({ videoId, lines, curStart, changeToLine, loadCaption }) => {
  useEffect(() => {
    axios(`https://voka.azurewebsites.net/api/v1/captions/${videoId}/de`).then(response =>
      loadCaption({ videoId, lines: response.data })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <YoutubeCaption lines={lines} curStart={curStart} onLineClick={changeToLine} />;
};

DictationCaption.propTypes = {
  lines: PropTypes.array,
  curStart: PropTypes.number,
  videoId: PropTypes.string,
  changeToLine: PropTypes.func,
  loadCaption: PropTypes.func
}

export default connect(
  ({ DictationView }, ownProps) => ({
    lines: DictationView.lines,
    curStart: DictationView.curStart,
    videoId: ownProps.videoId
  }),
  { changeToLine, loadCaption }
)(DictationCaption);
