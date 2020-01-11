import React from 'react';
import { connect } from 'react-redux';
import { FilterType, showAll, showActive, showDone } from '../../event-handlers/goal-filter-event';

const TodoFooter = ({ filter, clickAll, clickActive, clickDone }) => {

  let allLabel = filter === FilterType.SHOW_ALL ? 'active' : '';
  let activeLabel = filter === FilterType.SHOW_ACTIVE ? 'active' : '';
  let doneLabel = filter === FilterType.SHOW_DONE ? 'active' : '';

  return (
    <div className="btn-group btn-group-toggle">
      <label className={'btn btn-outline-info ' + allLabel}>
        <input type="radio" name="filters" id="filterAll" onClick={clickAll} /> All
      </label>
      <label className={'btn btn-outline-info ' + activeLabel}>
        <input type="radio" name="filters" id="filterActive" onClick={clickActive} /> Active
      </label>
      <label className={'btn btn-outline-info ' + doneLabel}>
        <input type="radio" name="filters" id="filterDone" onClick={clickDone} /> Done
      </label>
    </div>
  );
}

export default connect(state => ({
  filter: state.filter
}), dispatch => ({
  clickAll: () => { dispatch(showAll()) },
  clickActive: () => { dispatch(showActive()) },
  clickDone: () => { dispatch(showDone()) }
}))(TodoFooter);