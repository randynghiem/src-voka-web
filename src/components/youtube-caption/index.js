import React from 'react';

export default function ({ lines, curStart, onLineClick }) {
  React.useEffect(() => {
    let curLine = document.querySelector('.caption-viewer .current');
    if (curLine != null) {
      curLine.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
  }, [curStart]);

  return (
    lines &&
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
  );
}