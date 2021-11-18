import React, { useState,createContext } from 'react';
import Login from './components/Login.jsx';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register.jsx';
import Navbar from './components/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/Main.jsx'

function App() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <Router>
      <Navbar />
      <Switch>
        {!isLogged ? <>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </>
          :
          <Route path="/main">
            <Main />
          </Route>
        }
      </Switch>
    </Router>
  );
}


export default App;
