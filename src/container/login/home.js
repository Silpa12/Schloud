import React, { Component } from 'react';
import sch from './sch.jpg';


class Home extends Component {
  render() {
    return (
      <div className="App">
       <h1>SCHLOUD</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/studlist">List</a></li>
          </ul>
      <div className="pic">
    <img src={sch} className="App-logo" alt="logo" width="100%" />
      </div>
      </div>
    );
  }
}

export default Home;
