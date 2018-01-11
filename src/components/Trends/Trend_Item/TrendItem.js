import React from 'react';

const items = props => (
  <li className="trend-item context-trend-item">
    <a href="/">
      <span className="trend-name">{props.content.trendName}</span>
      <div className="trend-item-stats">{props.content.trendItemStatus}</div>
    </a>
  </li>
);

export default items;
