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
        <div className="container">
          <div className="row hero-section">
            <div className="col-sm-12 col-lg-4">
              <div className="hero-image">
                <img className="picture" src="./images/Deadlift.jpg" />
              </div>
            </div>
            <div className="col-sm-12 col-lg-8">
              <div className="hero-text">
                <h1>Crossfit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><img className="pictures" src="./images/Handshake.jpg" /></div>
                <div className="bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><img className="pictures" src="./images/Weights.jpg" /></div>
                <div className="bottom">Donec id eros ultricies, malesuada leo at, sollicitudin enim.</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><img className="pictures" src="./images/Workout.jpg" /></div>
                <div className="bottom">Aenean porttitor dictum orci, in porttitor orci semper in.</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
