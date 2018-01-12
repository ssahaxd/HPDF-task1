import React, { Component } from 'react';
import Header from './TweetHeader/Header';
import TextContent from './TweetTextContent/TextContent';
import Media from './TweetMedia/Media';
import Footer from './TweetFooter/TweetFooter';
import './Tweet.css';

class Tweet extends Component {
  render() {
    const data = { ...this.props.data };
    return (
      <div className="stream-item">
        <div className="tweet">
          <div className="content">
            <Header accountGroup={data.account} />
            <TextContent textContent={data.tweetText} />
            <Media url={data.MediaURL} />
            <Footer actionCount={{ ...data.actionCount }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
