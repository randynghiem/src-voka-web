import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { triggerQuery } from "../../event-handlers/dictation-events";

const SearchInput = ({ dispatch }) => {
  const queryRef = useRef(null);

  useEffect(() => {
    queryRef.current.value = "";
  }, []);

  const handleClick = event => {
    event.preventDefault();

    queryRef.current.value && dispatch(triggerQuery(queryRef.current.value));
  };

  return (
    <form onSubmit={e => handleClick(e)}>
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
          <button type="submit" className="btn btn-secondary pl-4 pr-4">
            <i className="fas fa-search fa-lg"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default connect()(SearchInput);
