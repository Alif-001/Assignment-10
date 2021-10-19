/* eslint-disable no-unused-expressions */

import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const { user, signInGoogle, githubLogin, signUp, errors } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  useEffect(() => {
    user?.email ? history.push("/") : "";
  }, [user, history]);

  const hendelSignUp = ({ name, email, password, repassword }) => {
    const emailregex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

    if (!name || !email || !password) {
      setError("Input Field is Required");
      return;
    } else if (emailregex.test(email) === false) {
      setError("E-mail Not Validate");
      return;
    } else if (password !== repassword) {
      setError("Passord Not Match");
      return;
    } else {
      setError("");
      signUp(email, password);
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

            <h3 className="title text-start fw-bold">Register</h3>
            <hr className="text-danger" />
            <form onSubmit={handleSubmit(hendelSignUp)}>
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  {...register("name")}
                />
                <label htmlFor="name">Enter Your Name</label>
              </div>
              <div className="form-floating mb-3">
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
                  id="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="repassword"
                  placeholder="Re-Password"
                  {...register("repassword")}
                />
                <label htmlFor="repassword">Re-Password</label>
              </div>
              <div className="register_footer d-flex px-2">
                <p>Already a member? </p>
                <NavLink to="/login">Go to Login</NavLink>
              </div>
              <div className="text-center">
                <button className="btn btn-info fw-bold text-white">
                  Register
                </button>
              </div>
            </form>
          </div>{" "}
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
    </section>
  );
};

export default Register;
