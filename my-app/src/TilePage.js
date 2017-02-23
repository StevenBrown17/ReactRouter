import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import slinky from './slinky.gif';
import './App.css';
import TileList from './TileList.js';



class TilePage extends Component {
  render() {
    return (
      <div>
        <h1>TILE PAGE</h1>
        <p>
            {this.props.children}
            <Link to="/">Home</Link>
          <TileList list={this.props.media}/>
        </p>
      </div>
    );
  }
}
export default TilePage;
