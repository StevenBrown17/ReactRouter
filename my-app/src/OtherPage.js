import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import banana from './banana.gif';
import './App.css';
import TileList from './TileList.js';



class OtherPage extends Component {
  render() {
    return (
      <div>
        <h1>OTHER PAGE</h1>
        {this.props.children}
        <img src={banana} className="banana" alt="banana" height="100" />
        <Link to="/">Home</Link>
      </div>
    );
  }
}
export default OtherPage;