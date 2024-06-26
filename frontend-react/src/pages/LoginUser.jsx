import React from "react";
import { Link } from "react-router-dom";

const LoginUser = () => {
  return (
    <div
      className="login-container d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh", backdropFilter: "blur(2px)" }}
    >
      <div
        className="card shadow"
        style={{ width: "30rem", backgroundImage: "" }}
      >
        <div className="card-body">
          <div className="p-1 mb-3 text-center">
            <h2>Sign in to your account</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
            <div className="ms-2" style={{ fontSize: "0.8rem" }}>
              <Link
                to={"/password/reset"}
                style={{ textDecoration: "none", color: "blue" }}
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="mb-3">
            <Link to={"/account"}>
              <button className="btn btn-primary form-control"> Login </button>
            </Link>
          </div>
          <p className="text-center" style={{ fontSize: "0.8rem" }}>
            Don't have an account?
            <Link to={"/signup/password"} style={{ textDecoration: "none" }}>
              {" "}
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
