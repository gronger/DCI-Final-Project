import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Logout from "./Logout.jsx";
import Register from "./Register.jsx";
import Navbar from "./Navbar.js";
import Login from "./Login";
import Formular from "./Formular.jsx";
import Main from "./Main.jsx";
import MyProfile from "./MyProfile.jsx";
import Cards from './Cards.js'
import About from "./about.jsx";
import Contact from "./contact.jsx"
import UserProfile from "./UserProfile.js"

function Navigation() {
  const user = localStorage.getItem("user");

  // if (user) {
  //     return (
  //       <div>
  //         <h1>{user}</h1>

  //         <Main />
  //       </div>
  //     )
  //   }

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          {!user ? (
            <>
              <Route exact path="/">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>
            
              <Route path="/formular">
                <Formular />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>


            </>
          ) : (
              <>
            <Route path="/main">
              <Main />
              </Route>
              <Route path="/myprofile">
              <MyProfile />
            </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/User/:id">
                <UserProfile />
              </Route>


            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default Navigation;
