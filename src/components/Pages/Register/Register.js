import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";
import { Link, useHistory, useLocation } from "react-router-dom";

const Register = () => {
  const { handleGoogleLogin, handleGithubLogin, handleUserRegister } =
    useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  // console.log(email, password);

  const handleRegister = () => {
    handleUserRegister(email, password)
      .then((result) => {
        setUser(result.user);
        history.push(redirectURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const redirectURL = location.state?.form || "/home";
  const signUpWithGoogle = () => {
    handleGoogleLogin()
      .then((result) => {
        setUser(result.user);
        history.push(redirectURL);
      })
      .catch((error) => setError(error.message));
  };
  const loginWithGitHub = () => {
    handleGithubLogin()
      .then((result) => {
        setUser(result.user);
        history.push(redirectURL);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="div">
      <div id="login" className="py-4 py-sm-5 page-signin">
        <Container>
          <div className=" p-4 p-md-5">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <Row>
              {" "}
              <h1 className="title fw-bold"> Create Account</h1>
              <hr className="text-danger my-4" />
              <Col xl={8} md={7}>
                <div>
                  <Form.Group className="my-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      onChange={hanldeEmail}
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={hanldePassword}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label={
                        <>
                          I agree to the{" "}
                          <Link to="/notfound">Terms and Conditions</Link>
                        </>
                      }
                    />
                  </Form.Group>
                  <Button
                    onClick={handleRegister}
                    variant="primary"
                    type="submit"
                  >
                    Register
                  </Button>

                  <div className="col-xs-12 col-sm-12 col-md-12 mt-3">
                    <p className="m-0">
                      Already have an account?
                      <Link className="ms-2" to="/login">
                        Log In
                      </Link>
                    </p>
                  </div>

                  <div className="login-btn mt-4">
                    <button
                      onClick={signUpWithGoogle}
                      className="btn btn-info text-white me-2"
                    >
                      Sign In With Google
                    </button>
                    <button
                      onClick={loginWithGitHub}
                      className="btn btn-dark m-2"
                    >
                      Sign In With Github
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;
