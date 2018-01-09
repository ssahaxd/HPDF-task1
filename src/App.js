import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout/Layout';
import Trends from './components/Trends/Trends';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Layout />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
