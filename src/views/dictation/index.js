import React from "react";
import { connect } from "react-redux";
import SearchInput from "../../components/youtube-search-input/search-input";
import SearchListing from "../../components/youtube-search-listing/search-listing";
import { triggerQuery, cleanup } from "../../event-handlers/dictation-search";

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

export default connect(
  ({ DictationSearch }) => ({
    query: DictationSearch.query,
    videos: DictationSearch.videos
  }),
  { triggerQuery, cleanup }
)(DictationApp);
