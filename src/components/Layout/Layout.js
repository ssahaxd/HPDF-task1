import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';
import ProfileCad from '../ProfileCard/ProfileCard';
import Trends from '../Trends/Trends';
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
          <div className="layout-row2" />
          <div className="layout-row3">
            <WhoToFollow />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
