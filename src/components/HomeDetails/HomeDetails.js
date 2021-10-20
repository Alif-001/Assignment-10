import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import HomeDetail from "../HomeDetail/HomeDetail";

const HomeDetails = () => {
  const [services] = useServices();
  return (
    <div className="services">
      <Container>
        <h1 className="mt-5">Top Service</h1>

        <hr className="bg-danger" />
        <Row xs={1} md={2} lg={3}>
          {services.slice(0, 6).map((service) => (
            <HomeDetail service={service} key={service.id}></HomeDetail>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeDetails;
