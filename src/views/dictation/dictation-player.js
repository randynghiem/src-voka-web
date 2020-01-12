import React from "react";
import { connect } from "react-redux";
import YouTubePlayer from "../../components/youtube-player/youtube-player";
import { jumpToLine, dispatchCommand } from '../../event-handlers/dictation-handlers';
import CommandBot from '../../components/youtube-bot';

const DictationPlayer = ({ videoId, markers, playAt, jump, command, onCommand }) => {
  return (
    <React.Fragment>
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
      <CommandBot onCommand={(cmd) => onCommand(cmd)} />
    </React.Fragment>
  );
};

export default connect(
  ({ DictationState }, ownProps) => ({
    videoId: ownProps.videoId,
    markers: DictationState.view.markers,
    playAt: DictationState.view.playAt,
    command: DictationState.view.command
  }),
  dispatch => ({
    jump: start => dispatch(jumpToLine(start)),
    onCommand: cmd => dispatch(dispatchCommand(cmd))
  })
)(DictationPlayer);