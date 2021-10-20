/* eslint-disable no-unused-expressions */

import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleGithubLogin, handleUserLogin } =
    useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, steIsLoading] = useState(true);

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    steIsLoading(true);
    handleUserLogin(email, password)
      .then((result) => {
        setUser(result.user);
        history.push(redirectURL);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => steIsLoading(false));
  };
  const redirectURL = location.state?.form || "/";
  const loginWithGoogle = () => {
    steIsLoading(true);
    handleGoogleLogin()
      .then((result) => {
        setUser(result.user);
        history.push(redirectURL);
      })
      .catch((error) => setError(error.message))
      .finally(() => steIsLoading(false));
  };
  const loginWithGitHub = () => {
    steIsLoading(true);
    handleGithubLogin()
      .then((result) => {
        setUser(result.user);
        history.push(redirectURL);
      })
      .catch((error) => setError(error.message))
      .finally(() => steIsLoading(false));
  };
  return (
    <div id="login" className="py-4 py-sm-5 ">
      <Container>
        <div className=" p-4 p-md-5 ">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <Row className="">
            <h1 className="mb-4 fw-bold">Login </h1>
            <hr className="text-danger mb-5" />
            <Col md={7} xl={8}>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button onClick={handleLogin} variant="primary" type="submit">
                  Log In
                </Button>
                <div className="col-xs-12 col-sm-12 col-md-12 mt-3">
                  <p>
                    <Link to="/notfound">Forgot Password</Link>
                  </p>
                  <p>
                    Don't have an account?
                    <Link className="ms-2" to="/register">
                      Create account
                    </Link>
                  </p>
                </div>
                <div className="login-btn mt-4">
                  <button
                    onClick={loginWithGoogle}
                    className="btn btn-info text-white me-3"
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
  );
};

export default Login;
