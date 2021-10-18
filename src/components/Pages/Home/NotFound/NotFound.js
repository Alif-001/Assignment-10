import React from "react";
import "./NotFound.css";
import background from "./../../../../images/Carousel-img/404-img.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <img src={background} alt="" height="400px" />
        <h1 className="not-found-message">
          We are sorry,<span className="text-danger"> page not found</span>.
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
