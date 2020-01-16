import React from "react";
import { connect } from 'react-redux';
import DictationPlayer from "./dictation-player";
import DictationCaption from "./dictation-caption";
import { cleanup } from '../../event-handlers/dictation-view';
import PropTypes from 'prop-types';

class DictationView extends React.Component {

  componentWillUnmount() {
    this.props.dispatch(cleanup());
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

DictationView.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(DictationView);