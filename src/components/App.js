import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
