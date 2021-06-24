import React from "react";
import { Fragment } from "react";
import Home from "./Images/Home.jpg";
import Mask from "./Images/Mask.png";
import Sanitizer from "./Images/Sanitizer.png";
import Distance from "./Images/Distance.jpg";
import Vaccine1 from "./Images/Vaccine1.jpg";
import "./Prevention.css";

function Prevention() {
  return (
    <Fragment id="fragment">
      <div>
        <h1 id="prevention-heading">
          Prevention is the Key to end this Pendemic
        </h1>
      </div>
      <div id="main-div">
        <div id="prevention-card">
          <div>
            <img src={Home} id="prevention-card-img" />
          </div>
          <div>
            <h1 id="mini-heading">Stay Home, Stay Safe</h1>
          </div>
        </div>
        <div id="prevention-card">
          <div>
            <img src={Mask} id="prevention-card-img" />
          </div>
          <div>
            <h1 id="mini-heading">Wear Mask Properly</h1>
          </div>
        </div>
        <div id="prevention-card">
          <div>
            <img src={Sanitizer} id="prevention-card-img" />
          </div>
          <div>
            <h1 id="mini-heading1"> Keep Your Hands Sanitized</h1>
          </div>
        </div>
        <div id="prevention-card">
          <div>
            <img src={Distance} id="prevention-card-img2" />
          </div>
          <div>
            <h1 id="mini-heading2">Main Social Distancing</h1>
          </div>
        </div>
        <div id="prevention-card">
          <div>
            <img src={Vaccine1} id="prevention-card-img3" />
          </div>
          <div>
            <h1 id="mini-heading3">Get Vaccinated</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Prevention;
