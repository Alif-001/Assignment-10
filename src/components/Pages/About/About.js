import React from "react";
import "./About.css";
import aboutImg from "./../../../images/about-img/staff.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="about-title mt-5 fw-bolder container">About Us</h1>
      <hr className="text-danger" />
      <div className="d-flex ">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 align-items-center text-center ">
            <div className="mt-md-5 pt-5 mt-sm-0 mt-lg-0 ">
              <div className="mt-5 p-2">
                <h2>
                  We thrive on building a healthy and solid community for all
                  individuals.
                </h2>
              </div>
              <div className="d-flex  about-text">
                <div className="p-2 ">
                  <p className="">
                    Our institute provides care for our region’s most precious
                    resource: human. We care for the growing needs of our
                    community. We build systems for providing health services
                    for individuals, families, communities and populations in
                    general, and not just patients.
                  </p>
                  <p className="">
                    We care for the growing needs of our community. We build
                    systems for providing health services for individuals,
                    families, communities and populations in general.
                  </p>
                  <p>
                    We use the latest technology and equipment that helps treat
                    patients effectively and efficiently.We meet the needs of
                    patients by offering specialty services that go far beyond
                    primary care.These programs seek to improve the health care
                    of people through various discoveries.Healthcare is a team
                    effort. Each healthcare provider is like a member of the
                    team with a special role.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-sm-12 col-md-12 col-lg-6 about-img pt-md-2  mt-sm-0 pt-sm-0 ">
            <div className="d-flex align-items-end pt-md-5 mt-md-5  mt-sm-0 pt-sm-0">
              <div className="mt-md-5 pt-md-3 mt-sm-0 pt-sm-0">
                <img
                  src={aboutImg}
                  alt=""
                  className="w-100 mx-auto d-block mt-md-5 pt-md-5 mt-sm-0 pt-sm-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
