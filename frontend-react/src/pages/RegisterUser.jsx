import React from "react";
//import LoginUser from "./LoginUser";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  return (
    <div
      className="register-container d-flex justify-content-center align-items-center"
      style={{
        flexDirection: "column",
        backgroundColor: "#FEFFD2",
        height: "100vh",
      }}
    >
      <div className="card shadow" style={{ width: "30rem" }}>
        <div className="card-body">
          <div className="p-1 mb-3" style={{ textAlign: "center" }}>
            <h2 style={{ fontWeight: "bold" }}>Register Here</h2>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div
            className="mb-3 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <select
                className="form-select"
                name=""
                id=""
                style={{ width: "8rem" }}
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Others</option>
              </select>
            </div>
            <div>
              <input type="number" className="form-control" placeholder="Age" />
            </div>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input
              type="phone"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <p className="text-center" style={{ fontSize: "0.9rem" }}>
            Have an account?
            <Link
              to={"/login/email"}
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "blue",
              }}
            >
              {" "}
              Login
            </Link>
          </p>
          <div className="mb-3">
            <button className="btn btn-primary form-control"> Sign up </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
