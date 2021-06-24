import React, { useState, useEffect, Fragment } from "react";
import Carousel from "../Covid/Carousel.js/Carousel";
import "./Covid.css";
import Navbar from "./Navbar/Navbar";
import Prevention from "./Prevention/Prevention";

const Covid = () => {
  const [cov, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const Coviddata = await res.json();
      console.log(Coviddata.statewise[0]);
      setData(Coviddata.statewise[0]);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <Fragment>
      <div id="fragmentid">
        <Navbar />
        <Carousel />
        <div className="countryname" id="Covidstatsheading">
          <h2 id="text">Covid Statistics</h2>
        </div>

        <div id="contentbody" id="reportcardbody">
          <div className="recover" id="reportcardrecovered">
            <h1 id="headingsmall">Recovered</h1>
            <h3>{cov.recovered}</h3>
          </div>
          <div className="recover" id="reportcarddeaths">
            <h1 id="headingsmall">Deaths</h1>
            <h3>{cov.deaths}</h3>
          </div>
          <div className="recover" id="reportcardconfirmed">
            <h1 id="headingsmall">Confirmed</h1>
            <h3>{cov.confirmed}</h3>
          </div>
        </div>
        <div className="recover" id="reportcardupdate">
          <h1 id="headingupdate">Last Updated</h1>
          <p>{cov.lastupdatedtime}</p>
        </div>
        <Prevention />
      </div>
    </Fragment>
  );
};

export default Covid;
