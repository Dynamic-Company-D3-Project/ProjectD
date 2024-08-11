import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/provider";
import { toast } from "react-toastify";

const ProviderLogin = () => {
  if (sessionStorage.length !== 0) sessionStorage.removeItem("token");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    if (email.length === 0) {
      toast.error("enter email");
    } else if (password.length === 0) toast.error("enter password");
    else {
      const result = await login({ email, password });
      if (result["status"] === "error") toast.error("no user found");
      else {
        const token = result["data"]["token"];
        const name = result["data"]["name"];
        //set token in session storage
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("name", name);

        toast.success("user logged in successfully");
        navigate("/provider/dashboard");
      }
    }
  };

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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 d-grid mx-auto col-6 justify-content-center">
            <button className="btn btn-primary" onClick={onSignIn}>
              <span className="text-2xl">Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderLogin;
