import React from 'react';
import './FooterCard.css';

const footerCard = props => (
  <div className="u-marginBottom flex-module ">
    <div className="flex-module-footer u-table">
      <a className="u-tableCell u-alignMiddle" href="/">
        <span className={props.values.icon} />
      </a>
      <a className="u-tableCell u-alignMiddle u-hoverUnderline" href="/">
        {props.values.text}
      </a>
    </div>
  </div>
);

export default footerCard;
