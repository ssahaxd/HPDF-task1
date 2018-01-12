import React from 'react';
import './TweetBox.css';

const TweetBox = props => (
  <div className="timeline-tweet-box">
    <div className="home-tweet-box tweet-box component tweet-user">
      <img
        className="top-timeline-tweet-box-user-image avatar u-size32"
        src="https://pbs.twimg.com/profile_images/597156959935037440/IsvmxGJ-_normal.png"
        alt=""
      />
      <div className="t1-form tweet-form">
        <div className="tweet-content">
          <div className="TweetBox-photoIntent">
            <div className="photo-selector">
              <button className="btn icon-btn">
                <span className="Icon Icon--media" />
              </button>
            </div>
            <div className="RichEditor RichEditor--emojiPicker">
              <div className="RichEditor-container u-borderRadiusInherit">
                <div className="RichEditor-scrollContainer u-borderRadiusInherit">
                  <dir className="tweet-box rich-editor">
                    <div>What’s happening?</div>
                  </dir>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TweetBox;
