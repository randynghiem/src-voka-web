import React from 'react';

/**
 * Custom filter component
 * @param {*} props React props
 */
export default function ({ FilterType, filter, onFilter }) {
  let all = filter === FilterType.SHOW_ALL ? 'active' : '';
  let active = filter === FilterType.SHOW_ACTIVE ? 'active' : '';
  let done = filter === FilterType.SHOW_DONE ? 'active' : '';

  return (
    <div className="btn-group btn-group-toggle">
      <label className={'btn btn-outline-info ' + all}>
        <input type="radio" name="filters" onClick={() => onFilter(FilterType.SHOW_ALL)} /> All
      </label>
      <label className={'btn btn-outline-info ' + active}>
        <input type="radio" name="filters" onClick={() => onFilter(FilterType.SHOW_ACTIVE)} /> Active
      </label>
      <label className={'btn btn-outline-info ' + done}>
        <input type="radio" name="filters" onClick={() => onFilter(FilterType.SHOW_DONE)} /> Done
      </label>
    </div>
  );
}