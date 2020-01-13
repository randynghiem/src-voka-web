import React from "react";
import { connect } from "react-redux";
import VoiceText from "../../components/voice-text";

class Voice extends React.Component {
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <VoiceText />
      </div>
    );
  }
}

export default connect()(Voice);