import Button from "@restart/ui/esm/Button";
import React from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import faqImg from "../../../images/faq/faqImg.jpg";

const Faq = () => {
  return (
    <div className="container mt-5">
      <h1 className=" mb-2">Frequently Asked Questions</h1>
      <hr className="text-danger my-3" />

      <div className="row mt-5">
        <div className="col-12 col-md-12 col-lg-6 col-xl-6">
          <img className="img-fluid w-100" src={faqImg} alt="" />
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-6">
          <h4 className="mb-2">Get Every Single Answers There if you want .</h4>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                My physician is a faculty member—what does that mean?
              </Accordion.Header>
              <Accordion.Body>
                employed faculty member (a doctor of medicine or doctor of
                philosophy for this discussion) from summary (i.e., without
                cause) dismissal, and is granted after a trial period during
                which the doctor has per- formed at a level commensurate with
                the standards established by his or her university.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What is an academic medical center?
              </Accordion.Header>
              <Accordion.Body>
                What is an Academic Medical Center (AMC)? An academic medical
                center is a hospital that partners with teaching institutions to
                provide clinical care, education, and research. AMCs also: Are
                medical facilities with Joint Commission accreditation and a
                commitment to training future health care providers.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What doctor will I see?</Accordion.Header>
              <Accordion.Body>
                All adults should have a primary care doctor. These are usually
                internal medicine (internists) or family medicine doctors.
                Getting an annual checkup can help your doctor spot health
                issues early on. Untreated conditions, such as high blood
                pressure, can lead to serious problems that are harder to treat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What is a medical student?</Accordion.Header>
              <Accordion.Body>
                Individuals who are in medical school are referred to as medical
                students. They are not referred to as a doctor or physician
                until they graduate from medical school.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How are residents supervised?</Accordion.Header>
              <Accordion.Body>
                Direct Supervision: the supervising physician is physically
                present with the resident and patient. Indirect Supervision:
                With direct supervision immediately available – the supervising
                physician is physically within the hospital or other site of
                patient care, and is immediately available to provide Direct
                Supervision.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="mb-5">
        <div className="w-25 ">
          <h6 className="mt-5">Message Us</h6>
          <hr className="text-danger mb-4" />
        </div>
        <h4 className="mb-3">Do You Have Any Questions ?</h4>
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
            <Form.Label>Subject</Form.Label>
            <Form.Control placeholder="Enter Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              placeholder=" Your message..... "
              as="textarea"
              rows={5}
            />
          </Form.Group>

          <Button className="btn btn-info text-white" type="button">
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Faq;
