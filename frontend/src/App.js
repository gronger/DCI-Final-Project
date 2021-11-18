import React from 'react';
import Login from './components/Login.jsx';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register.jsx';
import Navbar from './components/Navbar.js'
import "bootstrap/dist/css/bootstrap.min.css" 
import Formular from './components/Formular.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <Login />
        <Formular />
        </Route>
        <Route path="/register">
        <Register />
        </Route>
      </Switch>
  </Router>
  );
}


export default App;
