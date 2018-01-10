import React from 'react';
import './FooterCard.css';

const footerCard = () => (
  <div className="u-marginBottom flex-module ">
    <div className="flex-module-footer u-table">
      <a className="u-tableCell u-alignMiddle" href="">
        <span className="Icon Icon--people " />
      </a>
      <a className="u-tableCell u-alignMiddle u-hoverUnderline" href="">
        Find people you know
      </a>
    </div>
  </div>
);

export default footerCard;
