import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import slinky from './slinky.gif';
import './App.css';
import TileList from './TileList.js';
import App from './App';



class TilePage extends Component {
  render() {
    return (
      <div>
        <h1>TILE PAGE</h1>
        <p>
          <Link to="/">Home</Link>
          <TileList list={this.props.media}/>
        </p>
      </div>
    );
  }
}
export default TilePage;
