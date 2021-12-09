import React, { useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext.js";
import Logout from './Logout.jsx'
import { Link } from 'react-router-dom'
import MyProfile from './MyProfile.jsx';


function Navbar() {
  const isLogged = localStorage.getItem("user");

  const [loginStatus, setLoginStatus] = useContext(UserContext);

  return (
    <div class=" mb-5">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid border ">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler   "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {isLogged ?
                <>
                  <li class="nav-item">
                    <li class="nav-item">
                      <Link to="/main" className="nav-link active">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" className="nav-link active">
                        About
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contact" className="nav-link active">
                        contact
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/myprofile" className="nav-link active">
                        Myprofile
                      </Link>
                    </li>

                    <li>
                      <Logout />
                    </li>
                  </li>
                </>
                :
                <>
                  <li class="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/about" className="nav-link active">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/contact" className="nav-link active">
                      contact
                    </Link>
                  </li>

                  {/* <li>
                    <Logout />
                  </li> */}

                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
