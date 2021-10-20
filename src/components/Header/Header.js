import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedkit, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, LogOut } = useAuth();
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
      {/* logo section  */}
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <span className=" fa-2x text-danger">{element} </span>
          <span className="fs-2 fw-bold text-wrap">
            Health <span className="text-danger">Care</span>{" "}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold fs-5 menu me-2">
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
            {user?.providerId ? (
              <>
                {" "}
                <div className="text-center d-flex userId ps-4 ">
                  {element2}
                </div>
                <span className="nav-item">
                  {" "}
                  <span className="nav-link">
                    {user?.displayName || user.email}{" "}
                  </span>
                </span>
                <span className="nav-item">
                  <button
                    onClick={LogOut}
                    title="LogOUt"
                    className="nav-link logout btn btn-secondary btn-sm text-white text-center mt-1 "
                  >
                    LogOut
                  </button>
                </span>
              </>
            ) : (
              <>
                <span className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </span>
                <span className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </span>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
