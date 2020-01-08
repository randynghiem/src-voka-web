import React from "react";
import { connect } from "react-redux";

const DictationPlayer = props => {
  return <div>Dictation Player</div>;
};

export default connect(
  state => ({
    videoId: state.ytSearch.caption.videoId,
    markers: state.ytSearch.caption.markers
  }),
  dispatch => ({
    
  })
)(DictationPlayer);
