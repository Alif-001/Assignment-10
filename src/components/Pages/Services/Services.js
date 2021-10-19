import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";
const Services = () => {
  const [services] = useServices();
  return (
    <div className="services">
      <Container>
        <h1 className="mt-5">Services</h1>
        <hr className="bg-danger" />
        <Row xs={1} md={2} lg={3}>
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
