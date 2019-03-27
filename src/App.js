import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () =>
  (<nav>
    <a class="left" href="#crossfit">Acme Crossfit</a>
    <a class="right" href="#contact">Contact</a>
    <a class="right" href="#social">Social</a>
  </nav>)

class App extends Component {
  render() {
    return (
      <>
        <Nav />
      </>
    );
  }
}

export default App;
