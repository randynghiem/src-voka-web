import React from 'react';

export default function ({ children }) {
  return React.createElement("div", { dangerouslySetInnerHTML: { __html: children } });
}