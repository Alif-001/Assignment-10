import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Book An Appointment</h1> <hr className="text-danger mb-5" />
        <div>
          <p className="p-font  container ps-0 w-50   ms-0 pe-md-5">
            Please feel welcome to contact our friendly reception staff with any
            general or medical enquiry. Our doctors will receive or return any
            urgent calls.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 ">
          <Form className=" border border-secondary rounded p-5">
            <Row className="mb-3  ">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Phone" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1 Grafton Street, Dublin, Ireland" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Describe your problem</Form.Label>
              <Form.Control
                placeholder=" I have been suffering from..... "
                as="textarea"
                rows={5}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridCheckbox">
              <Form.Check type="checkbox" label="Emergency" />
            </Form.Group>
            <Button
              variant="primary"
              className="btn btn-info text-white"
              type="button"
            >
              Submit
            </Button>
          </Form>
        </div>
        <div
          className=" d-flex
        col-sm-12 col-md-12 col-lg-6  "
        >
          <div
            className=" d-flex align-items-center "
            style={{ width: "100%" }}
          >
            <iframe
              className="rounded  "
              title="map for "
              width="100%"
              height="615"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="http://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
