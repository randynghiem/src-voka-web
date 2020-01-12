import React from "react";
import { connect } from 'react-redux';
import DictationPlayer from "./dictation-player";
import DictationCaption from "./dictation-caption";
import { cleanupDictationView } from '../../event-handlers/dictation-handlers';

class DictationView extends React.Component {

  componentWillUnmount() {
    this.props.dispatch(cleanupDictationView());
  }

  render() {
    const { match } = this.props;
    const videoId = match.params.vid;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12 text-center">
            <DictationPlayer videoId={videoId} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <DictationCaption videoId={videoId} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(DictationView);