import React, { Component } from 'react';
import TrendItem from './Trend_Item/TrendItem';
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
              <span className="middot"> · </span>
              <a className="u-btn-link" href="/">
                <span>Change</span>
                <span className="u-hiddenVisually">Change trend settings</span>
              </a>
            </div>
            <div className="flex-module-inner">
              <ul className="trend-item">
                <TrendItem
                  content={{
                    trendName: 'West Bengal',
                    trendItemStatus: '2,335 Tweets',
                  }}
                />
                <TrendItem
                  content={{
                    trendName: 'SRK WINs WEF AWARD',
                    trendItemStatus: '13.6K Tweets',
                  }}
                />
                <TrendItem
                  content={{
                    trendName: '#HoliWithPari',
                    trendItemStatus: '2,309 Tweets',
                  }}
                />
                <TrendItem
                  content={{
                    trendName: '#NaseeruddinShah',
                    trendItemStatus: '@dna is Tweeting about this',
                  }}
                />
                <TrendItem
                  content={{
                    trendName: '#GhajinikanthTeaser',
                    trendItemStatus: '@YouTubeIndia is Tweeting about this',
                  }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trends;
