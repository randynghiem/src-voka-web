import React from "react";
import { connect } from "react-redux";
import YouTubePlayer from "../../components/youtube-player/youtube-player";
import { jumpToLine, dispatchCommand } from '../../event-handlers/dictation-view';
import CommandBot from '../../components/youtube-bot';

const DictationPlayer = ({ videoId, markers, playAt, onJump, command, onCommand }) => {
  return (
    <React.Fragment>
      {markers &&
        <YouTubePlayer
        video={videoId}
        markers={markers}
        onSpeechChange={start => onJump(start)}
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
  ({ DictationView }, ownProps) => ({
    videoId: ownProps.videoId,
    markers: DictationView.markers,
    playAt: DictationView.playAt,
    command: DictationView.command
  }),
  dispatch => ({
    onJump: start => dispatch(jumpToLine(start)),
    onCommand: cmd => dispatch(dispatchCommand(cmd))
  })
)(DictationPlayer);