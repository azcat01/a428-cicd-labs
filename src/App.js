import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Profile</h1>
        </header>
        <p className="App-intro">
          Muhammad Irsyad Abdurrahman<br></br>
          azcat01@yahoo.co.id<br></br>
          Check me out on instagram : 164810_
        </p>
      </div>
    );
  }
}

export default App;
