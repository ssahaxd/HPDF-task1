import React from 'react';
import AccountGroup from '../../AccountGroup/AccountGroup';
import './ListItem.css';

const listItem = props => (
  <div className="UserSmallListItem account-summary ">
    <div className="UserSmallListItem-context" />
    <div className="dismiss">
      <span className="Icon Icon--close" />
    </div>
    <div className="content">
      <AccountGroup item={{ ...props.item }} />
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
