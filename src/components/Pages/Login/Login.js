/* eslint-disable no-unused-expressions */

import React, { useEffect, useState } from "react";

import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { user, signInGoogle, githubLogin, signInEmail, error } = useAuth();

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
            <h3 className="title text-start fw-bold">Login</h3>
            <hr className="text-danger" />
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
                <p>Don't have an account?</p>
                <NavLink to="/register" className="ps-2">
                  {" "}
                  Create account.
                </NavLink>
              </div>
              <div className="text-center mb-4">
                <button className="btn btn-primary  fw-bold text-white">
                  Login
                </button>
              </div>
            </form>
            <div className="d-flex justify-content-evenly">
              <div className="d-flex mx-2">
                <span
                  onClick={signInGoogle}
                  className=" btn btn-sm btn-info social_btn social_btn  text-white border  rounded"
                >
                  {" "}
                  Sign In With Google
                </span>
              </div>
              <div className="d-flex">
                <span
                  onClick={githubLogin}
                  className="btn btn-sm  btn-dark social_btn"
                >
                  Sign In With Github
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
