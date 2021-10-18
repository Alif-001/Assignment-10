import React from "react";
import "./About.css";
import aboutImg from "./../../../images/about-img/staff.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="about-title mt-5 fw-bolder container">About Us</h1>
      <div className="d-flex ">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 align-items-center text-center ">
            <div className="mt-md-5 pt-5 mt-sm-0 mt-lg-0 ">
              <div className="mt-5">
                <h2>We Would Love To See You Smile</h2>
              </div>
              <div className="d-flex  about-text">
                <div className="p-2 ">
                  <p className="">
                    Distinctively re-engineer revolutionary meta-services and
                    premium architectures. Intrinsically incubate intuitive
                    opportunities and real-time potentialities. Globally
                    revolutionize global sources through interoperable services.
                  </p>
                  <p className="">
                    Appropriately communicate one-to-one technology after
                    plug-and-play networks and worldwide potentialities.
                  </p>
                  <p>
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline.
                  </p>
                  <p>
                    Keeping your eye on the ball while performing a deep dive on
                    the start-up mentality to derive convergence on
                    cross-platform integration. Dramatically mesh low-risk
                    high-yield alignments before transparent e-tailers.
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
