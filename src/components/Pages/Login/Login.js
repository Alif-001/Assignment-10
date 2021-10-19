/* eslint-disable no-unused-expressions */

import React, { useEffect, useState } from "react";

import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { user, signInGoogle, signInEmail, error } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirect = location.state?.from || "/";

  const [errors, setError] = useState("");
  useEffect(() => {
    user?.email ? history.push(redirect) : "";
  }, [user, history, redirect]);

  const handelSignIn = (data) => {
    const emailCheck = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (emailCheck.test(data.email)) {
      setError("");
      signInEmail(data.email, data.password).then(() => {
        history.push(redirect);
      });
    } else {
      setError("E-mail is not Valid");
    }
  };

  return (
    <section className="container register">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
          <div className="register">
            {error || errors ? (
              <>
                <div className="alert alert-danger" role="alert">
                  {error}
                  {errors}
                </div>
              </>
            ) : (
              ""
            )}
            <h3 className="title text-center">Login</h3>
            <form onSubmit={handleSubmit(handelSignIn)}>
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email address"
                  {...register("email")}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  {...register("password")}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="register_footer d-flex">
                <p>Create a New Account</p>
                <NavLink to="/register"> Go to Register</NavLink>
              </div>
              <div className="text-center mb-4">
                <button className="btn btn-info  fw-bold text-white">
                  Login
                </button>
              </div>
            </form>
            <hr />

            <div className="d-flex">
              <button
                onClick={signInGoogle}
                className="btn btn-sm btn-danger socal_btn"
              >
                <i className="fab fa-google"></i> Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
