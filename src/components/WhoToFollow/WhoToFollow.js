import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from '../Footer/Footer';
import FooterCard from '../FooterCard/FooterCard';
import ListItem from './ListItem/ListItem';
import './WhoToFollow.css';

class WhoToFollow extends Component {
  render() {
    return (
      <div className="dashboard-right">
        <div className="module wtf-module">
          <div className="flex-module">
            <Header />
            <div className="user-recommendations flex-module-inner">
              <ListItem
                item={{
                  avatar:
                    'https://pbs.twimg.com/profile_images/925700796598984704/HC-eUKQz_bigger.jpg',
                  name: 'Sonam Kapoor',
                  username: 'sonamakapoor',
                }}
              />
              <ListItem
                item={{
                  avatar:
                    'https://pbs.twimg.com/profile_images/2881526894/1a54fd9ccb222e586c2ed3127482c405_bigger.jpeg',
                  name: 'Business Standard',
                  username: 'bsindia',
                }}
              />
              <ListItem
                item={{
                  avatar:
                    'https://pbs.twimg.com/profile_images/1850193578/IE_Square_Logo_bigger.png',
                  name: 'The Indian Express',
                  username: 'IndianExpress',
                }}
              />
            </div>
          </div>
          {/* Find People You Know */}
          <FooterCard
            values={{
              icon: 'Icon Icon--people',
              text: 'Find people you know',
            }}
          />
        </div>
        <Footer />
        <FooterCard
          values={{
            icon: 'Icon Icon--promotedStroked',
            text: 'Advertise with Twitter',
          }}
        />
      </div>
    );
  }
}

export default WhoToFollow;
