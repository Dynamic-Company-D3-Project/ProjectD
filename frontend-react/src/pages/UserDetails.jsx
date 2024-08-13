import NavBarUser from "../components/NavBarUser";
import NavbarVertical from "../components/NavbarVertical";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function UserDetails() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    age: "",
    gender: "",
  });
  const [updateData, setUpdateData] = useState(userDetails);
  const [address, setAddress] = useState("Address not added");

  const token = sessionStorage.getItem('authToken');

  useEffect(() => {
    loadUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function loadUserDetails() {
    try {
      const response = await axios.get(`${SPRING_URL}/user/getUser`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const addressResponse = await axios.get(`${SPRING_URL}/user/getHomeAddressString`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.data) {
        setUserDetails(response.data);
        setUpdateData(response.data);
        if (addressResponse.data != null) setAddress(addressResponse.data);
        sessionStorage.setItem('userName', `${response.data.firstName}`);
      } else {
        toast.error("Error fetching the Details");
      }
    } catch (error) {
      console.error("Error fetching the Details:", error);
      toast.error("Error fetching the Details");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${SPRING_URL}/user/updateUser`, updateData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log("Response data:", response.data);
      if (response.data) {
        toast.success("Details updated successfully");
        setUserDetails(response.data);
        setUpdateData(response.data);
        sessionStorage.setItem('userName', `${response.data.firstName}`);
      } else {
        toast.error("Error updating the Details");
      }
    } catch (error) {
      console.error("Error updating the Details:", error);
      toast.error("Error updating the Details");
    }
  };

  return (
    <div className="page-container">
      <NavBarUser />
      <div className="content-container container-fluid">
        <div className="row">
          <div className="col-2">
            <NavbarVertical name={userDetails.firstName} />
          </div>
          <div className="col-10">
            <div className="categoryHeader page-header fw-bold text-3xl">
              <h2>Personal Information</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mt-5">
                <div className="col-6">
                  <input
                    className="form-control input input-bordered"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={updateData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control input input-bordered"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={updateData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-6">
                  <input
                    className="form-control input input-bordered"
                    type="email"
                    name="email"
                    disabled
                    placeholder="Email"
                    value={updateData.email}
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control input input-bordered"
                    type="mobile"
                    name="phoneNumber"
                    placeholder="Mobile Number"
                    value={updateData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-6">
                  <textarea
                    placeholder="Address"
                    type="Address"
                    disabled
                    className="textarea textarea-bordered textarea-lg w-full max-w-m"
                    name="address"
                    value={address}
                  ></textarea>
                </div>
                <div className="col-6">
                  <div className="col-4 mb-3">
                    <input
                      className="form-control input input-bordered"
                      type="age"
                      placeholder="Age"
                      name="age"
                      value={updateData.age}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-4 form-group">
                    <select
                      className="form-select input input-bordered"
                      name="gender"
                      value={updateData.gender}
                      onChange={handleChange}
                    >
                      <option value="" hidden>
                        Gender
                      </option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHERS">Others</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-center mt-5">
                <button
                  type="submit"
                  className="btn btn-primary text-center d-flex justify-center"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserDetails;
