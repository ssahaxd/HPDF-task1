import React from 'react';
import './Media.css';

const media = props => (
  <div className="AdaptiveMediaOuterContainer">
    <div className="AdaptiveMedia is-square">
      <div className="AdaptiveMedia-container">
        <div className="">
          <div className="AdaptiveMedia-photoContainer">
            <img src={props.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default media;
