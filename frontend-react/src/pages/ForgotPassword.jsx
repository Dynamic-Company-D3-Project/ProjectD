import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div
      className="forgot-password-container d-flex justify-content-center align-items-center"
      style={{
        flexDirection: "column",
        backgroundColor: "#FEFFD2",
        height: "100vh",
      }}
    >
      <div className="card shadow" style={{ width: "30rem" }}>
        <div className="card-body">
          <div className="p-1 mb-3" style={{ textAlign: "center" }}>
            <h2 style={{ fontWeight: "bold" }}>Trouble logging in?</h2>
          </div>
          <div className="mb-3 ps-3 pe-3">
            <p style={{ opacity: "0.5", textAlign: "center" }}>
              Enter your email address and we'll send you a link to get back
              into your account.
            </p>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary form-control">
              {" "}
              Send login link{" "}
            </button>
          </div>
          <div className="mb-3" style={{ textAlign: "center" }}>
            <h5 style={{ fontWeight: "bold", color: "gray" }}>OR</h5>
          </div>
          <div className="mb-3" style={{ textAlign: "center" }}>
            <Link
              to={"/signup/password"}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
              }}
            >
              Create new account
            </Link>
          </div>
          <div className="mt-5">
            <button className="btn btn-secondary form-control">
              {" "}
              <Link
                to={"/login/email"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Back to login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
