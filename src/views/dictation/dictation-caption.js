import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeToLine } from '../../event-handlers/dictation-handlers';

const DictationCaption = ({ lines, curStart, onLineClick }) => {
  useEffect(() => {
    let curLine = document.querySelector('.caption-viewer .current');
    if (curLine != null) {
      curLine.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
  }, [curStart]);

  return (
    lines &&
    <div className="row">
      <ul className="list-group list-group-flush caption-viewer mt-3">
        {
          lines.map(li => (
            <li className={"list-group-item caption-item " + li.current}
              key={li.start} data-start={li.start}
              onClick={e => onLineClick(e.currentTarget.dataset.start)}>
              <span className="caption-item-time">{li.formattedStart}</span>
              <span className="caption-item-text">{li.text}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default connect(
  ({ytSearch}) => ({
    lines: ytSearch.caption.lines,
    curStart: ytSearch.caption.curStart
  }),
  dispatch => ({
    onLineClick: start => dispatch(changeToLine(start))
  })
)(DictationCaption);