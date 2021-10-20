import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid m-0 footer_top  bg-light">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center">
            <div className="company_details text-start ps-4">
              <h2 className="pt-3 ">Our Mission</h2>
              <p className="pt-2">
                Over time, the digital landscape has transformed, and the way
                businesses use online technology has changed. WebAlive has also
                evolved, mastering new skills, developing new products and
                continuing to provide cutting-edge web design, application
                development, and e-commerce solutions to our clients.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="location ps-2 text-center pt-5">
              <h1>
                Health<span className="text-danger"> Care</span>
              </h1>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 pt-3">
            <div className="link ps-2">
              <h2> Links</h2>
              <ul className="">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="container-fluid m-0 footer">
        <div className="text-center">
          <p className="m-0">Copyright &copy; 2021 Health Care</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
