import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedkit, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const element = <FontAwesomeIcon icon={faMedkit} />;
  const element2 = <FontAwesomeIcon icon={faUser} />;
  return (
    <Navbar
      className=""
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <span className=" fa-2x text-danger">{element} </span>
          <span className="fs-2 fw-bold">Health Ninja </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold fs-5 menu">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Register">
              Register
            </Nav.Link>
            {/* <NavDropdown
              title={
                <img
                  style={{
                    width: "45px",
                    borderRadius: "50%",
                  }}
                  src={photoURL} 
                  alt={element2}
                />
              }
              id="collasible-nav-dropdown"
            >
              <div className="text-center">
                <h6>name</h6>
                <p className="m-0 mb-2"></p>
                <button onClick={logOut} className="btn btn-primary">
                  Sign Out
                </button>
              </div>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
