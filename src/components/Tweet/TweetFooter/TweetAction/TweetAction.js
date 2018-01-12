import React from 'react';

const TweetAction = props => (
  <div className={props.action.name}>
    <button className="ProfileTweet-actionButton">
      <div className="IconContainer">
        <span className={props.action.IconClass} />
      </div>
      <span className="ProfileTweet-actionCount ">
        <span className="ProfileTweet-actionCountForPresentation">
          <span className="ProfileTweet-actionCountForPresentation">{props.count}</span>
        </span>
      </span>
    </button>
  </div>
);

export default TweetAction;
