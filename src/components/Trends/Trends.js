import React, { Component } from 'react';
import './Trends.css';

class Trends extends Component {
  render() {
    return (
      <div className="module Trends">
        <div className="trends-inner">
          <div className="flex-module trend-container">
            <div className="flex-module-header">
              <h3>
                <span className="trend-location">Trends for you</span>
              </h3>
              <span className="middot"> . </span>
              <a className="btn-link" href="">
                <span>Change</span>
                <span className="u-hiddenVisually">Change trend settings</span>
              </a>
            </div>
            <div className="flex-module-inner">
              <ul className="trend-item">
                <li className="trend-item context-trend-item">
                  <a href="">
                    <span className="trend-name">#HoliWithPari</span>
                    <div className="trend-item-stats">2,309 Tweets</div>
                  </a>
                </li>
                <li className="trend-item context-trend-item">
                  <a href="">
                    <span className="trend-name">#HoliWithPari</span>
                    <div className="trend-item-stats">2,309 Tweets</div>
                  </a>
                </li>
                <li className="trend-item context-trend-item">
                  <a href="">
                    <span className="trend-name">#HoliWithPari</span>
                    <div className="trend-item-stats">2,309 Tweets</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trends;
