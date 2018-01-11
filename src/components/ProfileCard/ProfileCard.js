import React, { Component } from 'react';
import ProfileState from './ProfileState/ProfileState';
import './ProfileCard.css';

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-card module">
        <a
          href="https://twitter.com/ssaha_anz"
          target="_blank"
          rel="noopener noreferrer"
          className="u-block ProfileCard-bg"
        />
        <div className="ProfileCard-content">
          <div className="u-table">
            <a
              className="ProfileCard-avatarLink u-inlineBlock"
              href="https://twitter.com/ssaha_anz"
            >
              <img
                className="ProfileCard-avatarImage"
                src="https://pbs.twimg.com/profile_images/597156959935037440/IsvmxGJ-_bigger.png"
                alt=""
              />
            </a>
            <div className="ProfileCard-userFields">
              <div className="ProfileCard-name">
                <a className="u-textInheritColor" href="https://twitter.com/ssaha_anz">
                  Sandip Saha
                </a>
              </div>
              <span className="ProfileCard-screenname u-inlineBlock u-dir" dir="ltr">
                <a className="ProfileCard-screennameLink" href="/ssaha_anz">
                  @<b>ssaha_anz</b>
                </a>
              </span>
            </div>
          </div>
          <div className="ProfileCardStats">
            <ui className="ProfileCardStats-statList Arrange Arrange--bottom Arrange--equal">
              <ProfileState
                values={{
                  stateLabel: 'Tweets',
                  stateValue: '10',
                }}
              />

              <ProfileState
                values={{
                  stateLabel: 'Following',
                  stateValue: '142',
                }}
              />

              <ProfileState
                values={{
                  stateLabel: 'Followers',
                  stateValue: '153',
                }}
              />
            </ui>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
