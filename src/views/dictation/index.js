import React from "react";
import { connect } from "react-redux";
import SearchInput from "../../components/youtube-search-input/search-input";
import SearchListing from "../../components/youtube-search-listing/search-listing";
import { triggerQuery, cleanup } from "../../event-handlers/dictation-search";

class DictationApp extends React.Component {
  componentWillUnmount() {
    this.props.onCleanup();
  }

  render() {
    const { query, videos, onHandleQuery, onLoadMore } = this.props;
    return (
      <React.Fragment>
        <SearchInput onClick={onHandleQuery} query={query} />
        <SearchListing videos={videos} onFiniteScroll={onLoadMore} />
      </React.Fragment>
    );
  }
}

export default connect(
  ({ DictationSearch }) => ({
    query: DictationSearch.query,
    videos: DictationSearch.videos
  }),
  dispatch => ({
    onHandleQuery: query => dispatch(triggerQuery(query)),
    onLoadMore: () => dispatch(triggerQuery()),
    onCleanup: () => dispatch(cleanup())
  })
)(DictationApp);
