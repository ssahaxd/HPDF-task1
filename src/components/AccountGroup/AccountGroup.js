import React from 'react';
import './AccountGropu.css';

const accountGropu = props => (
  <a className="account-group user-thumb" href="/">
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
);

export default accountGropu;
