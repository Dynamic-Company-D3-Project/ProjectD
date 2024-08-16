import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify"
import { SPRING_URL } from "../services/Service";

const RegisterUser = () => {


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    age: "",
    phone: "",
  })

  //yaha kya ho raha ki prev data bhi update ho rhi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    //ye prevent kr rha page to auto-reload
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords does not matched");
      return;
    }
    if(formData.age < 15){
      toast.error("Age should be greater than 15")
    }

    try {
      console.log(formData)
      const  response = await axios.post(`${SPRING_URL}/user/register`,formData);
      if(response != null){
        toast.success("Registration successful");
        window.location.href = "/login";
      }
      else{
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("Unable to register");
      console.error(error);
    }
  }
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
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div
            className="mb-3 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                id=""
                style={{ width: "8rem" }}
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHERS">Others</option>
              </select>
            </div>
            <div>
              <input type="number" className="form-control" placeholder="Age"
               name="age"
               value={formData.age}
               onChange={handleChange}
               />
            </div>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="phone"
              className="form-control"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <p className="text-center" style={{ fontSize: "0.9rem" }}>
            Have an account?
            <Link
              to={"/login"}
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
            <button className="btn btn-primary form-control" type="submit"> Sign up </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterUser;
