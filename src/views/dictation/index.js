import React from "react";
import { connect } from "react-redux";
import SearchInput from "../../components/youtube-search-input/search-input";
import SearchListing from "../../components/youtube-search-listing/search-listing";
import { triggerQuery, cleanup } from "../../event-handlers/dictation-search";
import PropTypes from 'prop-types';

class DictationApp extends React.Component {
  componentWillUnmount() {
    this.props.cleanup();
  }

  render() {
    const { query, videos, triggerQuery } = this.props;
    return (
      <React.Fragment>
        <SearchInput onClick={triggerQuery} query={query} />
        <SearchListing videos={videos} onFiniteScroll={triggerQuery} />
      </React.Fragment>
    );
  }
}

DictationApp.propTypes = {
  query: PropTypes.string,
  videos: PropTypes.array,
  triggerQuery: PropTypes.func,
  cleanup: PropTypes.func
};

export default connect(
  ({ DictationSearch }) => ({
    query: DictationSearch.query,
    videos: DictationSearch.videos
  }),
  { triggerQuery, cleanup }
)(DictationApp);
