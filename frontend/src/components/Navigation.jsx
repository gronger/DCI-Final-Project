import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Logout from "./Logout.jsx";
import Register from "./Register.jsx";
import Navbar from "./Navbar.js";
import Login from "./Login";
import Formular from "./Formular.js";
import Main from "./Main.jsx";
import MyProfile from "./MyProfile.jsx";

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
            </>
          ) : (
              <>
            <Route path="/main">
              <Main />
              </Route>
              <Route path="/myprofile">
              <MyProfile />
            </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default Navigation;
