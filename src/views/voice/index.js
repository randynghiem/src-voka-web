import './index.css';
import React from "react";
import { connect } from "react-redux";
import VoiceText from "../../components/voice-text";
import { speakText } from "../../utils/speech";
import CommandBot from '../../components/command-bot';

class Voice extends React.Component {
  state = {
    sentences: null,
    curLine: 0,
    curText: ''
  };

  componentDidUpdate(prevProps) {
    // handle changes of props

  }

  onPlay = (items) => {
    this.setState({ sentences: items });

    // play from first line
    speakText(items[0]);
    this.setState({ curLine: 1 });
  }

  onNext = () => {

    // check if the input text is correct

    // if incorrect, repeat and highlight in Red

    // if correct, proceed to the next sentences

    const { sentences, curLine } = this.state;
    if (curLine === sentences.length) {
      // stop
    } else {
      speakText(sentences[curLine]);
      this.setState({ curLine: curLine + 1 });
    }
  }

  onPause = () => {

  }

  componentWillUnmount() {
    // issue cleanup commands
  }

  handleTyping = (e) => {
    this.setState({ curText: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <VoiceText onPlay={this.onPlay} onPause={this.onPause} />
        <div className="form-group">
          <label htmlFor="typingBox">Write down what you hear:</label>
          <ul className="list-group voice-typed-list">

          </ul>
          <input type="text" name="typingBox" id="typingBox" className="form-control" value={this.state.curText} onChange={this.handleTyping} />
        </div>
        <CommandBot commands={['ok']} onCommand={this.onNext} />
      </React.Fragment>
    );
  }
}

export default connect()(Voice);
