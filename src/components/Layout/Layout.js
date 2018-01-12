import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';
import ProfileCad from '../ProfileCard/ProfileCard';
import Trends from '../Trends/Trends';
import TweetBox from '../TweetBox/TweetBox';
import Tweet from '../Tweet/Tweet';
import WhoToFollow from '../WhoToFollow/WhoToFollow';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="layout-nav">
          <NavBar />
        </div>
        <div className="layout-flex">
          <div className="layout-row1">
            <ProfileCad />
            <Trends />
          </div>
          <div className="layout-row2">
            <TweetBox />

            <Tweet
              data={{
                account: {
                  avatar:
                    'https://pbs.twimg.com/profile_images/921413165925122049/Lu2Z9TDK_bigger.jpg',
                  name: 'Virender Sehwag',
                  username: 'virendersehwag',
                  time: '2h',
                },
                tweetText:
                  'Arise , awake and stop not till the goal is reached . Pranams to one of the greatest beings to have walked this planet,  #SwamiVivekananda ji.',
                MediaURL: 'https://pbs.twimg.com/media/DTUMG0vVMAEv14P.jpg',
                actionCount: {
                  reply: 98,
                  retweet: 867,
                  heart: '5.2K',
                },
              }}
            />
            <Tweet
              data={{
                account: {
                  avatar:
                    'https://pbs.twimg.com/profile_images/946798631151112194/0e0OgvFz_bigger.jpg',
                  name: 'Marques Brownlee',
                  username: 'MKBHD',
                  time: '27m',
                },
                tweetText: 'Vegas. Shot on Pixel.',
                MediaURL: 'https://pbs.twimg.com/media/DTUVFhWU8AEg6Ic.jpg',
                actionCount: {
                  reply: 156,
                  retweet: 298,
                  heart: '3.4K',
                },
              }}
            />
            <Tweet
              data={{
                account: {
                  avatar:
                    'https://pbs.twimg.com/profile_images/847464571711348740/KuGwOhGP_bigger.jpg',
                  name: 'AB de Villiers',
                  username: 'ABdeVilliers17',
                  time: 'Jan 11',
                },
                tweetText:
                  "Spend the day with me on the AB de Villiers app and see what I get up to when I'm not playing Cricket! Download the app now: http://bit.ly/ab17app ",
                MediaURL: 'https://pbs.twimg.com/media/DTPdRvrXUAAeLNV.jpg',
                actionCount: {
                  reply: 171,
                  retweet: 242,
                  heart: '3.8K',
                },
              }}
            />
          </div>
          <div className="layout-row3">
            <WhoToFollow />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
