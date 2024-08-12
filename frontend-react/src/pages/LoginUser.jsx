import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { SPRING_URL } from "../services/Service";

const LoginUser = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(loginData);
      const response = await axios.post(`${SPRING_URL}/user/login`, loginData);
      console.log(response.data);
      if (response.data) {
        toast.success("Login successful");
        // Assuming the response contains a token
        sessionStorage.setItem('authToken', response.data.jwtToken); // Store token or relevant data
        sessionStorage.setItem('email',response.data.userName)
        window.location.href = "/";
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error("Login failed");
      console.error(error);
    }
  };

  return (
    <div
      className="login-container d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh", backdropFilter: "blur(2px)" }}
    >
      <div className="card shadow" style={{ width: "30rem" }}>
        <div className="card-body">
          <div className="p-1 mb-3 text-center">
            <h1 className="fw-bold">Sign in to your account</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
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
              <button className="btn btn-primary form-control" type="submit">
                Login
              </button>
            </div>
            <p className="text-center" style={{ fontSize: "0.8rem" }}>
              Don't have an account?
              <Link to={"/signup"} style={{ textDecoration: "none" }}>
                {" "}
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
