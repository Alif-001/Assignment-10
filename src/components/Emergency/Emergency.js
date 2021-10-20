import React from "react";
import "./Emergency.css";

import phone from "./../../images/help-call/phone.png";

const Emergency = () => {
  return (
    <div className="container mt-5 contact-bg  contact-card w-50 d-flex rounded  justify-content-start">
      <div className="container p-3 ms-5  d-flex w-75 justify-content-center   align-items-center ">
        <div className="p-0 ms-4 contact-bg d-flex align-items-center  ">
          <img className=" img-fluid" src={phone} alt="" width="200px" />
        </div>
        <div className="ps-3  contact-bg">
          <h3 className="w-50 text-danger text-nowrap">Emergency Cases</h3>
          <p className="p-font w-100 pe-3  ">
            Please feel welcome to contact our friendly reception staff with any
            general or medical enquiry, you can call us at
            <span className="text-danger text-nowrap ">
              {" "}
              <a
                className="text-decoration-none link-danger"
                href="tel:00201061245741"
              >
                +002 01060205040
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
