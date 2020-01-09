import React from "react";
import { connect } from "react-redux";
import YouTubePlayer from "../components/youtube-player";
import { jumpToLine } from '../event-handlers/search-event';

const DictationPlayer = ({ videoId, markers, playAt, jump, command }) => {
  return (
    <div className="row">
      {markers &&
        <YouTubePlayer
          video={videoId}
          markers={markers}
          onSpeechChange={start => jump(start)}
          playAt={playAt}
          command={command}
          width="720"
          height="405"
          autoplay="1"
        />}
    </div>
  );
};

export default connect(
  ({ ytSearch }) => ({
    videoId: ytSearch.caption.videoId,
    markers: ytSearch.caption.markers,
    playAt: ytSearch.caption.playAt,
    command: ytSearch.caption.command
  }),
  dispatch => ({
    jump: start => dispatch(jumpToLine(start))
  })
)(DictationPlayer);