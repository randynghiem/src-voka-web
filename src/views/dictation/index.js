import './index.css';
import React from "react";
import { connect } from 'react-redux';
import SearchInput from "../../components/youtube-search-input/search-input";
import SearchListing from "../../components/youtube-search-listing/search-listing";
import { triggerQuery, cleanupDictationSearch } from '../../event-handlers/dictation-handlers';

class DictationApp extends React.Component {

  componentWillUnmount() {
    // clean up store
    this.props.onCleanup();
  }

  render() {
    const { query, videos, handleQuery, loadMore } = this.props;
    return (
      <React.Fragment>
        <SearchInput onClick={handleQuery} query={query} />
        <SearchListing videos={videos} onFiniteScroll={loadMore} />
      </React.Fragment>
    )
  }
}

export default connect(
  ({ DictationState }) => ({
    query: DictationState.search.query,
    videos: DictationState.search.videos
  }),
  dispatch => ({
    handleQuery: (query) => dispatch(triggerQuery(query)),
    loadMore: () => dispatch(triggerQuery()),
    onCleanup: () => dispatch(cleanupDictationSearch())
  })
)(DictationApp);