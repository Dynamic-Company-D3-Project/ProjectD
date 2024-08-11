import React from "react";
import { Link } from "react-router-dom";

const ProviderLogin = () => {
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
            <h2 className="text-2xl">Provider Login</h2>
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
          </div>
          <div className="mb-3 d-grid mx-auto col-6">
            <button className="btn btn-primary">
              <span className="text-2xl">Login</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderLogin;
