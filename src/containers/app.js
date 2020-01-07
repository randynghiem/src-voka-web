import React from "react";
import SearchInput from "../components/search-input";
import SearchListing from "../components/search-listing";

const App = (props) => {
  return (
    <div className="container">
      <SearchInput />
      <SearchListing />
    </div>
  );
}

export default App;