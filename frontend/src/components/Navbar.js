import React, { useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext.js";

function Navbar() {

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
              {loginStatus.isLogin ?
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Log out
                </a>
              </li> : 
              <>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active mr-3" aria-current="page" href="#">
                  Contact
                </a>
              </li> 
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
