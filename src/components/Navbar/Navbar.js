import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import './Navbar.css';

const tabstyle = {
  left: 100,
  width: 480,
  height: 40,
};

const inkBarStyle = {
  background: '#4A913C',
  hoverColor: '#4A913C',
};

const btnStyle = {
  borderRadius: 25,
  transition: 'all 0.2s ease-in-out',
  margin: '5px 0 0 16px',
};

const textStyle = {
  textTransform: 'none',
  fontSize: 14,
  fontFamily: 'Helvetica Neue,Helvetica,sans-serif',
  cursor: 'pointer',
  fontWeight: 'bold',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color: '#FFFFFF',
};

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar-outer">
        <div className="nav-bar-inner">
          <div className="nav-container">
            <div className="nav-tab">
              <Tabs
                style={tabstyle}
                tabItemContainerStyle={{ background: '#fff' }}
                inkBarStyle={inkBarStyle}
              >
                <Tab>
                  <i className="fas fa-home nav-icon-active" style={{ color: '#4A913C' }} />
                  <span className="nav-item-active" style={{ color: '#4A913C' }}>
                    Home
                  </span>
                  <i className="fas fa-bolt nav-icon" />
                  <span className="nav-item">Moments</span>
                  <i className="fas fa-bell nav-icon" />
                  <span className="nav-item">Notifications</span>
                  <i className="fas fa-envelope nav-icon" />
                  <span className="nav-item">Messages</span>
                </Tab>
                <Tab disabled />
                <Tab disabled />
                <Tab disabled />
              </Tabs>
            </div>
            <div className="nav-logo">
              <i className="fab fa-twitter twitter_icon" />
            </div>
            <div className="nav-btns">
              <div className="nav-search">
                <input type="text" placeholder="Search Twitter" className="search-box" />
                <i className="fa fa-search fa-fw search-icon" />
              </div>
              <Avatar src="./profile_pic.jpg" size={32} className="nav-avatar" />
              <FlatButton
                label="Tweet"
                style={btnStyle}
                backgroundColor="#6ea762"
                hoverColor="#4a913c"
                labelStyle={textStyle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
