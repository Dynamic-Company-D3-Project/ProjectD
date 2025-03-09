import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config  from "../../config";


const AdminLogin = () => {
  const navigate = useNavigate()
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
     // console.log(loginData);
      const response = await axios.post(`${config.dotNetApi}Admin/admin/login`, loginData);
      console.log(response.data);
      if (response.data) {
        console.log("Login successful");
        // Assuming the response contains a token
        sessionStorage.setItem('admin',JSON.stringify(response.data) ); // Store token or relevant data
        // sessionStorage.setItem('email',response.data.userName)
        navigate("/admin/dashboard",{replace:true}) ;
      } else {
        console.error("Login 1 failed");
      }
    } catch (error) {
      console.error("Login failed");
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
            </div>
            <div className="mb-3">
              <button className="btn btn-primary form-control" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;