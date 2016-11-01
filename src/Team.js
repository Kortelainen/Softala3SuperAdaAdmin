import React, { Component } from 'react';
import logo from '../images/superda.png';
import './styles/App.css';




class Team extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Admin sivu</h2>
          <h3> HAISTAPASKA</h3>
        </div>


        <p className="App-intro">Odota hetki ladataan koodi<code>src/Hyvinjanna.js</code> Noniin nyt meillä on jännenpää:)!
        </p>
      </div>

    );
  }
}

export default Team;
