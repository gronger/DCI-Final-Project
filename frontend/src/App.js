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
import Logout from './components/Logout.jsx';



const user = localStorage.getItem("user");

function App() {

  if (user) {
    return (
      <div>
        <h1>{user}</h1>
        <Formular />
        <Logout />
      </div>
    )
  }

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
        <Login />
        </Route>
        <Route path="/register">
        <Register />
        </Route>
      </Switch>
  </Router>
  );
}


export default App;
