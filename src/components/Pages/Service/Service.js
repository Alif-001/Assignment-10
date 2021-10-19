import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Srervice.css";

const service = ({ service }) => {
  const { img, title, details } = service;
  return (
    <Col className="my-5">
      <Card className="align-items-stretch col-md-12">
        <Card.Img
          variant="top"
          className="img-thumbnail service-img img-fluid img-responsive"
          src={img}
        />
        <Card.Body className="h-100 fix-h ">
          <Card.Title className="fs-5">{title}</Card.Title>

          <Card.Text className="service-text container text-wrap p-0">
            {details.slice(0, 180)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card-f">
          <Link to="/notfound" className="btn btn-info">
            Details
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default service;
