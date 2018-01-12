import React from 'react';
import TweetAction from './TweetAction/TweetAction';
import './TweetFooter.css';

const TweetFooter = props => (
  <div className="stream-item-footer">
    <div className="ProfileTweet-actionList">
      <TweetAction
        action={{
          name: 'ProfileTweet-action ProfileTweet-action--reply',
          IconClass: 'Icon Icon--medium Icon--reply',
        }}
        count={props.actionCount.reply}
      />
      <TweetAction
        action={{
          name: 'ProfileTweet-action ProfileTweet-action--retweet ',
          IconClass: 'Icon Icon--medium Icon--retweet',
        }}
        count={props.actionCount.retweet}
      />
      <TweetAction
        action={{
          name: 'ProfileTweet-action ProfileTweet-action--favorite',
          IconClass: 'Icon Icon--heart Icon--medium',
        }}
        count={props.actionCount.heart}
      />
      <TweetAction
        className="u-textUserColorHover"
        action={{
          name: 'ProfileTweet-action ProfileTweet-action--dm',
          IconClass: 'Icon Icon--medium Icon--dm',
        }}
      />
    </div>
  </div>
);

export default TweetFooter;
