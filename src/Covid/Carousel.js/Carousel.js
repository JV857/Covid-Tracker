import React from "react";
import Covid1 from './Covidimage/Covid1.jpg';
import Covid2 from './Covidimage/Covid2.jpg';
import Covid3 from './Covidimage/Covid3.png';
import Handwash from './Covidimage/Handwash.jpg';
import './Carousel.css';

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="Carousel-img" >
          <div className="carousel-item active">
            <img src={Covid1} className="d-block w-100" alt="..." id="Covid-carousel"/>
          </div>
          <div className="carousel-item">
            <img src={Covid2} class="d-block w-100" alt="..." id="Covid-carousel" />
          </div>
          <div className="carousel-item">
            <img src={Covid3} class="d-block w-100" alt="..." id="Covid-carousel"/>
          </div>
        </div>
        <div className="carousel-item">
            <img src={Handwash} class="d-block w-100" alt="..." />
          </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
