import React from "react";
import SearchInput from "../../components/youtube-search-input/search-input";
import SearchListing from "../../components/youtube-search-listing/search-listing";

const App = (props) => {
  return (
    <div className="container">
      <SearchInput />
      <SearchListing />
    </div>
  );
}

export default App;