import React, { useRef } from "react";

/**
 * Custom search input component
 * @param {object} props React props with custom onClick event
 */
export default function ({ query, onClick }) {
  const queryRef = useRef(null);

  React.useEffect(() => {
    if (queryRef) {
      queryRef.current.value = query;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = event => {
    event.preventDefault();
    queryRef.current.value && onClick && onClick(queryRef.current.value);
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
}