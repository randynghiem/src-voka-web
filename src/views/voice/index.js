import React from "react";
import { connect } from "react-redux";
import VoiceText from "../../components/voice-text";
import { getVoices, speakText } from "../../utils/speech";

class Voice extends React.Component {
  state = {
    curVoice: null
  };

  componentDidMount() {
    this.setState({ curVoice: getVoices() });
  }

  componentDidUpdate(prevProps) {
    // handle changes of props
    

  }

  componentWillUnmount() {
    // issue cleanup commands
  }

  render() {
    return <VoiceText />;
  }
}

export default connect()(Voice);
