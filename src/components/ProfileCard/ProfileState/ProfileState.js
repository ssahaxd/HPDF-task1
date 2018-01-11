import React from 'react';
import './ProfileState.css';

const profileStatus = props => (
  <li className="ProfileCardStats-stat Arrange-sizeFit">
    <a className=" u-textUserColor u-block " href="/">
      <span className="ProfileCardStats-statLabel u-block">{props.values.stateLabel}</span>
      <span className="ProfileCardStats-statValue">{props.values.stateValue}</span>
    </a>
  </li>
);

export default profileStatus;
