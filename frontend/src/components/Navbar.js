import React, { useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext.js";
import Logout from './Logout.jsx'
import { Link } from 'react-router-dom'
import MyProfile from './MyProfile.jsx';
import "./Navbar.css";

function Navbar() {
  const isLogged = localStorage.getItem("user");

  const [loginStatus, setLoginStatus] = useContext(UserContext);

  return (
    <div class=" mb-5">
      <nav className="navbar">

        <ul >
          {isLogged ?
            <>
                <li class="nav-item">
                  <Link to="/main">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact">
                    contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/myprofile">
                    Myprofile
                  </Link>
                </li>
                <li class="nav-item">
                  <Logout />
                </li>
            </>
            :
            <>
                <li class="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact">
                    contact
                  </Link>
                </li>
            </>
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
