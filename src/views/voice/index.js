import React from "react";
import { connect } from "react-redux";
import VoiceText from "../../components/voice-text";
import VoiceTest from "../../components/voice-test";

class Voice extends React.Component {
  componentWillUnmount() {
    // issue cleanup commands
    
  }

  render() {
    return (
      <React.Fragment>
        <VoiceText />
        <VoiceTest />
      </React.Fragment>
    );
  }
}

export default connect()(Voice);