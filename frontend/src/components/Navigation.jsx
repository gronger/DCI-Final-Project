import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Logout from "./Logout.jsx";
import Register from "./Register.jsx";
import Navbar from "./Navbar.js";
import Login from "./Login";
import Formular from "./Formular.js";



function Navigation() {


const user = localStorage.getItem("user");

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
    <div>
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
    </div>
  );
}

export default Navigation;
