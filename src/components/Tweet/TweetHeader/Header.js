import React from 'react';
import AccountGroup from '../../AccountGroup/AccountGroup';
import './Header.css';

const header = (props) => {
  const account = { ...props.accountGroup };
  return (
    <div className="stream-item-header">
      <AccountGroup className="account-group" item={{ ...account }} />
      <small className="time">
        <a href="/" className="tweet-timestamp">
          <small> · </small>
          <span>{account.time}</span>
        </a>
      </small>
      <div className="ProfileTweet-action ProfileTweet-action--more">
        <div className="dropdown">
          <button className="ProfileTweet-actionButton u-textUserColorHover">
            <div className="IconContainer">
              <span className="Icon Icon--caretDownLight Icon--small" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
