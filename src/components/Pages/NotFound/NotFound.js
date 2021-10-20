import React from "react";
import "./NotFound.css";
import background from "./../../../images/Carousel-img/404-img.png";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="not-found container">
      <div className="text-center">
        <img src={background} alt="" className="img-fluid" />
        <h1 className="not-found-message container">
          We are sorry,
          <span className="text-danger fw-bold"> page not found.</span>
        </h1>
        <button className="btn btn-info fw-bold notFound-btn">
          <Nav.Link as={NavLink} to="/home" className="text-white">
            Back to home
          </Nav.Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
