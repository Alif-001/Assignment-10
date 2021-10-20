import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Srervice.css";

const service = ({ service }) => {
  const { id, img, title, details } = service;
  return (
    <Col className="my-5 ">
      <Card className="align-items-stretch col-md-12 ">
        <div className="card-3">
          <Card.Img
            variant="top"
            className=" rounded-5 img-fluid hover-img"
            src={img}
          />{" "}
          <Card.Body className="h-100 fix-h ">
            <Card.Title className="fs-5">{title}</Card.Title>
            <Card.Text className="service-text container text-wrap p-0 p-font ">
              {details.slice(0, 180)}...
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-f bg-info">
            <NavLink
              to={`/services/${id}`}
              className="btn btn-info text-white details-btn  btn-lg my-2"
            >
              Read More
            </NavLink>
          </Card.Footer>
        </div>
      </Card>
    </Col>
  );
};

export default service;
