import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import useServices from "../../../hooks/useServices";

// show details page
const ShowDetails = () => {
  const { id } = useParams();
  const [services] = useServices();
  const [service, setServices] = useState({});
  useEffect(() => {
    const getServices = services.find((props) => props.id === parseInt(id));
    setServices(getServices);
  }, [services, id]);
  return (
    <div className="w-90">
      <section className="container w-90 m-0 about_banner">
        <div className="container w-90">
          <div className="banner_details d-flex justify-content-between align-content-center align-items-center"></div>
        </div>
      </section>
      <section className=" m-0">
        <div className="row w-100">
          <div className="col-10 col-sm-10 col-md-7 col-lg-7 mx-auto">
            <div className="show_services">
              <h2 className="pt-4 fs-1 fw-bold my-5 ">{service?.title}</h2>

              <div className=" ">
                <div>
                  <img
                    className="text-center d-flex  img-fluid hover-img "
                    src={service?.img}
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-4 text-start p-font ">{service?.details}</p>
                </div>
                <button className="btn btn-info fw-bold notFound-btn text-start d-flex my-2">
                  <Nav.Link as={NavLink} to="/home" className="text-white">
                    Back to home
                  </Nav.Link>
                </button>
              </div>
              <div className="mb-5"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowDetails;
