import React from 'react'


function navbar() {
    return (
<div class=' mb-5'>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid border ">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler   " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active mr-3" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

     </div>
    )
}

export default navbar
