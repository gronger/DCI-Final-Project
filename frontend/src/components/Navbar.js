import React from "react";
import Logout from './Logout.jsx'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const isLogged = localStorage.getItem("user");

  return (
    <div className="navbar2" class=" mb-5">
      <nav className="navbar" class="text-center">

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
                    Contact
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
                    Contact
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
