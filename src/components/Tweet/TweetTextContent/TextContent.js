import React from 'react';
import './TextContent.css';

const textContent = props => (
  <div className="text-container">
    <p className="TweetTextSize tweet-text">{props.textContent}</p>
  </div>
);

export default textContent;
