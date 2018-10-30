import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Login from './Login.js'
// import { Router } from 'react-router';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login/" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
