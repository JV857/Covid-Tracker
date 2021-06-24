import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark" style={{height:"70px"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://image.flaticon.com/icons/png/512/2659/2659991.png"
              alt=""
              width="50"
              height="50"
              class="d-inline-block align-text-top"
            />
            Covid-19 Tracker
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
