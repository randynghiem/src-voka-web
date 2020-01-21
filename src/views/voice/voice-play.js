import './voice-play.css';
import React from "react";
import { connect } from "react-redux";
import { speakText } from "../../utils/speech";
import CommandBot from '../../components/command-bot';
import * as VokaApi from '../../services/voka-api';

class VoicePlay extends React.Component {
  state = {
    sentences: [],
    curLine: 0,
    curText: '',
    showHint: false,
    playing: false,
    typedList: [],
    matched: true
  };

  componentDidMount() {
    //load the initial state
    let list = [];
    VokaApi.getSetById('a1', 1)
      .then(data => {
        data.sections.forEach(section => {
          section.parts.forEach(part => {
            list = list.concat(part.sentences);
          });
        });
        this.setState({ sentences: list });
      });
  }

  componentDidUpdate(prevProps) {
    // handle changes of props
    
  }

  onPlay = () => {
    // play from first line
    speakText(this.state.sentences[0]);
    this.setState({ playing: true });
  }

  onEnter = (e) => {
    e.preventDefault();
    this.onNext('ok');
  }

  onNext = (cmd) => {
    const { curLine, sentences, curText } = this.state,
      nextLine = curLine + 1,
      correctText = sentences[curLine];

    if(cmd === 'again'){
      speakText(sentences[curLine]);
      return;
    }

    // check if the input text is correct
    // if incorrect, repeat and highlight in Red
    if (!curText || !correctText) {
      return;
    }

    const normalizedCurrentText = curText.replace(/[^a-zA-Z0-9]/g, '');
    const normalizedCorrectText = correctText.replace(/[^a-zA-Z0-9]/g, '');
    if (normalizedCorrectText.toLowerCase() !== normalizedCurrentText.toLowerCase()) {
      console.log("Not matched: ", normalizedCurrentText, normalizedCorrectText)
      this.setState({ matched: false });
      return;
    }

    // if correct, proceed to the next sentences
    if (curLine === sentences.length) {
      // stop
    } else {
      this.setState({ curLine: nextLine, showHint: false, curText: '', matched: true });
      speakText(sentences[nextLine]);
    }
  }

  onShowHint = () => {
    this.setState({ showHint: true });
  }

  componentWillUnmount() {
    // issue cleanup commands
  }

  handleTyping = (e) => {
    this.setState({ curText: e.target.value, matched: true });
  }

  render() {
    const { showHint, curLine, sentences, playing, matched } = this.state;
    return (
      <form onSubmit={this.onEnter}>
        <div className="form-group">
          <label htmlFor="typingBox">Write down what you hear:</label>
          <ul className="list-group voice-typed-list">

          </ul>
          <input type="text" name="typingBox" id="typingBox" className={!matched ? "form-control border-danger" : "form-control"} value={this.state.curText} onChange={this.handleTyping} />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-info mr-3" onClick={this.onPlay}>
            <i className={playing ? "fas fa-pause fa-lg" : "fas fa-play fa-lg"}></i>
          </button>
          <button type="submit" className="btn btn-info mr-3">
            <i className="fas fa-forward fa-lg"></i>
          </button>
          <button className="btn btn-info" onClick={this.onShowHint}>Show Hint</button>
        </div>
        <div className="form-group">
          {showHint && <div className="alert alert-warning">{sentences[curLine]}</div>}
        </div>
        <CommandBot commands={['ok', 'again']} onCommand={this.onNext} />
      </form>
    );
  }
}

export default connect()(VoicePlay);
