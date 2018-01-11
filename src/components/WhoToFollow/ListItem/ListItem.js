import React from 'react';
import './ListItem.css';

const listItem = props => (
  <div className="UserSmallListItem account-summary ">
    {/* items */}
    <div className="UserSmallListItem-context" />
    <div className="dismiss">
      <span className="Icon Icon--close" />
    </div>
    <div className="content">
      <a className="account-group user-thumb" href="">
        <img className="avatar" src={props.item.avatar} alt="" />
        <span className="account-group-inner">
          <strong className="fullname">{props.item.name}</strong>
          <span className="UserBadges">
            <span className="Icon Icon--verified" />
          </span>
          <span className="userNameBreak">&nbsp;</span>
          <span className="username u-dir u-textTruncate">
            @<b>{props.item.username}</b>
          </span>
        </span>
      </a>
      <div className="user-actions">
        <span className="user-actions-follow-button follow-button">
          <button className="u-clearOutline EdgeButton EdgeButton--secondary button-text follow-text">
            <span>Follow</span>
          </button>
        </span>
      </div>
    </div>
  </div>
);

export default listItem;
