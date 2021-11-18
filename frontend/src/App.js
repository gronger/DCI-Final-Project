import React from 'react';
import Login from './Login.jsx';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Register.jsx';


function App() {
  return (
    <Router>
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
