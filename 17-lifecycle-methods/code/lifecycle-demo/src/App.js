import React, { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubUserInfo username="Elie"/>
        <GithubUserInfo username="chaicoffee08" />
      </div>
    );
  }
}

export default App;
