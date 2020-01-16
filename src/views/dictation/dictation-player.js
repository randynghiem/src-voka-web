import React from "react";
import { connect } from "react-redux";
import YouTubePlayer from "../../components/youtube-player/youtube-player";
import { jumpToLine, dispatchCommand } from "../../event-handlers/dictation-view";
import CommandBot from "../../components/command-bot";
import PropTypes from 'prop-types';

const DictationPlayer = ({ videoId, markers, playAt, command, jumpToLine, dispatchCommand }) => {
  return (
    <React.Fragment>
      {markers && (
        <YouTubePlayer
          video={videoId}
          markers={markers}
          onSpeechChange={start => jumpToLine(start)}
          playAt={playAt}
          command={command}
          width="720"
          height="405"
          autoplay="1"
        />
      )}
      <CommandBot
        commands={["repeat", "again", "next", "reset", "stop", "play", "pause"]}
        onCommand={cmd => dispatchCommand(cmd)}
      />
    </React.Fragment>
  );
};

DictationPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  markers: PropTypes.array,
  playAt: PropTypes.string,
  command: PropTypes.string,
  jumpToLine: PropTypes.func,
  dispatchCommand: PropTypes.func
};

export default connect(
  ({ DictationView }, ownProps) => ({
    videoId: ownProps.videoId,
    markers: DictationView.markers,
    playAt: DictationView.playAt,
    command: DictationView.command
  }),
  { jumpToLine, dispatchCommand }
)(DictationPlayer);
