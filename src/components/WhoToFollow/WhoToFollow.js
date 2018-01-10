import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import FooterCard from '../FooterCard/FooterCard';
import FooterCardAd from '../FooterCard-ads/FooterCardAd';
import './WhoToFollow.css';

class WhoToFollow extends Component {
  render() {
    return (
      <div className="dashboard-right">
        <div className="module wtf-module">
          <div className="flex-module">
            <div className="flex-module-header">
              <h3>Who to follow</h3>
              <small> · </small>
              <button className="btn-link u-clearOutline">
                <small>Refresh</small>
              </button>
              <small className="view-all">
                {' '}
                ·{' '}
                <a className="" href="">
                  View all
                </a>
              </small>
            </div>

            <div className="user-recommendations flex-module-inner">
              <div className="UserSmallListItem account-summary ">
                {/* items */}
                <div className="UserSmallListItem-context" />
                <div className="dismiss">
                  <span className="Icon Icon--close" />
                </div>
                <div className="content">
                  <a className="account-group user-thumb" href="">
                    <img
                      className="avatar"
                      src="https://pbs.twimg.com/profile_images/2881526894/1a54fd9ccb222e586c2ed3127482c405_bigger.jpeg"
                      alt=""
                    />
                    <span className="account-group-inner">
                      <strong className="fullname">Business Standard</strong>
                      <span className="UserBadges">
                        <span className="Icon Icon--verified" />
                      </span>
                      <span className="userNameBreak">&nbsp;</span>
                      <span className="username u-dir u-textTruncate">
                        @<b>bsindia</b>
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
              <div className="UserSmallListItem account-summary ">
                {/* items */}
                <div className="UserSmallListItem-context" />
                <div className="dismiss">
                  <span className="Icon Icon--close" />
                </div>
                <div className="content">
                  <a className="account-group user-thumb" href="">
                    <img
                      className="avatar"
                      src="https://pbs.twimg.com/profile_images/1850193578/IE_Square_Logo_bigger.png"
                      alt=""
                    />
                    <span className="account-group-inner">
                      <strong className="fullname">The Indian Express</strong>
                      <span className="UserBadges">
                        <span className="Icon Icon--verified" />
                      </span>
                      <span className="userNameBreak">&nbsp;</span>
                      <span className="username u-dir u-textTruncate">
                        @<b>IndianExpress</b>
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
            </div>
          </div>
          {/* Find People You Know */}
          <FooterCard />
        </div>
        <Footer />
        <FooterCardAd />
      </div>
    );
  }
}

export default WhoToFollow;
