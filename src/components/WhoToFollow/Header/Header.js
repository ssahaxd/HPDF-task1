import React from 'react';

const header = () => (
  <div className="flex-module-header">
    <h3>Who to follow</h3>
    <small> · </small>
    <button className="u-btn-link u-clearOutline u-hoverUnderline">
      <small>Refresh</small>
    </button>
    <small className="view-all">
      {' '}
      ·{' '}
      <a className="u-hoverUnderline" href="/">
        View all
      </a>
    </small>
  </div>
);

export default header;
