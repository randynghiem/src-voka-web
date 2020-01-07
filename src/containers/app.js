import React, { useRef } from "react";
import { connect } from "react-redux";
const API_KEY = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA";

const App = (props) => {
  const queryRef = useRef(null);

  const handleClick = event => {
    console.log(queryRef.current.value);
    console.log(props);
  };

  return (
    <div className="container">
      <div className="form-row mt-3 mb-3">
        <div className="col-8">
          <input
            ref={queryRef}
            type="text"
            name="queryBox"
            id="queryBox"
            className="form-control"
            placeholder="Search Youtube"
          />
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-secondary pl-4 pr-4"
            onClick={e => handleClick(e)}
          >
            <i className="fas fa-search fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect()(App);
