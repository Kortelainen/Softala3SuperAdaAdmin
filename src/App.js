import React, { Component } from 'react';
import logo from '../images/superda.png';
import './styles/App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Admin sivu</h2>
        </div>

        <div className="Navibar">
        <ul>
        <li><a href="">Home</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">About</a></li>
        </ul>
        </div>
        <p className="App-intro">Odota hetki ladataan koodi<code>src/Hyvinjanna.js</code> Noniin nyt meillä on jännenpää:)!
        </p>
      </div>

    );
  }
}

export default App;
