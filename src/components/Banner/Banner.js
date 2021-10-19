import React from "react";

import "./Banner.css";

import img1 from "./../../images/Carousel-img/img1.jpg";
import img2 from "./../../images/Carousel-img/img2.jpg";

const Banner = () => {
  return (
    <section className="container-fluid p-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100  h-img" alt="..." />

            <div className="caption container text-center">
              <div className="carousel-caption">
                <h5 className="banner_title">
                  Medical Services That You Can Trust
                </h5>
                <p className="banner_text ">
                  It is important for patients to have access to a primary care
                  physician they can trust....
                </p>
                <button className="banner_btn btn">Book Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100   h-img" alt="..." />

            <div className="caption container">
              <div className="carousel-caption text-centre">
                <h5 className="banner_title">We Care for You</h5>
                <p className="banner_text d-flex  justify-content-center">
                  efforts made to maintain or restore physical, mental, or ....
                </p>
                <button className="banner_btn btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
