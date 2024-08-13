import { useState, useEffect } from "react";
import NavbarVertical from "../components/NavbarVertical";
import Address from "../components/Address";
import Footer from "../components/Footer";
import NavBarUser from "../components/NavBarUser";
import axios from "axios";
import { SPRING_URL } from "../services/Service";

function Addresses() {
  const [addresses, setAddresses] = useState([]);
  const token = sessionStorage.getItem('authToken');

  useEffect(() => {
    loadAddresses();
  }, []); // Added empty dependency array to avoid infinite loop

  async function loadAddresses() {
    try {
      const response = await axios.get(`${SPRING_URL}/user/getAddress`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setAddresses(response.data || []);
    } catch (error) {
      console.error("Error loading addresses", error);
      setAddresses([]); // Ensure addresses is set to an empty array in case of error
    }
  }

  return (
    <div className="page-container">
      <NavBarUser />
      <div className="content-container">
        <div className="row">
          <div className="col-2">
            <NavbarVertical />
          </div>
          <div className="col-10">
            <h2 className="page-header" style={{ fontWeight: "bold", fontSize: 30 }}>
              Address Details
            </h2>
            <div className="row justify-content-center">
              <h5 style={{ fontWeight: "bold", fontSize: 20 }}>
                Add Address :
              </h5>
              <div
                className="border border-dark text-center shadow-xl"
                style={{ height: 370, width: 700, borderRadius: 10 }}
              >
                <input
                  type="text"
                  placeholder="Street name"
                  className="form-control mt-2"
                />
                <input
                  type="text"
                  placeholder="Apt, Suite, etc"
                  className="mt-3 form-control"
                />
                <div className="row mt-3">
                  <div className="col-6 form-group">
                    <select className="form-select">
                      <option value="" disabled selected hidden>
                        Country
                      </option>
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <select className="form-select">
                      <option value="" disabled selected hidden>
                        State
                      </option>
                      <option>Maharashtra</option>
                      <option>Uttar Pradesh</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      placeholder="Zip-Postal code"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <select className="form-select">
                      <option value="" disabled selected hidden>
                        Address Type
                      </option>
                      <option>Home</option>
                      <option>Work</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-6 text-center">
                    <button type="submit" className="btn btn-success">
                      Confirm
                    </button>
                  </div>
                  <div className="col-6 text-center">
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ backgroundColor: "red" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              {addresses.length > 0 ? (
                addresses.map((address) => (
                  <div className="col ml-10" key={address.address_id}>
                    <Address
                      addressType={address.addressType}
                      streetName={address.street}
                      houseNo={address.houseNo}
                      country={address.country}
                      state={address.state}
                      city={address.city}
                      zip={address.pincode}
                    />
                  </div>
                ))
              ) : (
                <div className="col text-center">
                  <h5>No addresses found.</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}

export default Addresses;
