import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeDetail = ({ service }) => {
  const { img, title, details } = service;
  return (
    <Col className="my-5 ">
      <Card className="align-items-stretch col-md-12 ">
        <div className="card-3">
          <Card.Img variant="top" className=" rounded-5 img-fluid " src={img} />{" "}
          <Card.Body className="h-100 fix-h ">
            <Card.Title className="fs-5">{title}</Card.Title>
            <Card.Text className="service-text container text-wrap p-0">
              {details.slice(0, 180)}...
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-f bg-info">
            <Link
              to="/notfound"
              className="btn btn-info text-white details-btn  btn-lg"
            >
              Read More
            </Link>
          </Card.Footer>
        </div>
      </Card>
    </Col>
  );
};

export default HomeDetail;
