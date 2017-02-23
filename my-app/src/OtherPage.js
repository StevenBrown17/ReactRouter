import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import banana from './banana.gif';
import './App.css';
import TileList from './TileList.js';
import App from './App';



class OtherPage extends Component {
  render() {
    return (
      <div>
        <h1>OTHER PAGE</h1>
        <img src={banana} className="banana" alt="banana" height="100" />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default OtherPage;