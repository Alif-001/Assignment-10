import React from "react";

import "./Banner.css";

import img1 from "./../../images/Carousel-img/img1.jpg";
import img2 from "./../../images/Carousel-img/img2.jpg";
import { Carousel } from "react-bootstrap";

// Carousel

const Banner = () => {
  return (
    <Carousel fade indicators={false}>
      <Carousel.Item indicators="false">
        <img className="d-block w-100" src={img1} alt="Second slide" />

        <Carousel.Caption>
          <h5 className="banner_title">Medical Services That You Can Trust</h5>
          <p className="banner_text ">
            It is important for patients to have access to a primary care
            physician they can trust....
          </p>{" "}
          <button className="banner_btn btn">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item indicators={false}>
        <img className="d-block w-100" src={img2} alt="Third slide" />

        <Carousel.Caption>
          <h5 className="banner_title">We Care for You</h5>
          <p className="banner_text d-flex  justify-content-center">
            efforts made to maintain or restore physical, mental, or ....
          </p>
          <button className="banner_btn btn">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
