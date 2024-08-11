import { useState } from "react";
import NavbarVertical from "../components/NavbarVertical";
import AddressDetails from "../dummy/AddressDetails.json";
import Address from "../components/Address";
import Footer from "../components/Footer";
import NavBarUser from "../components/NavBarUser";

function Addresses() {
  const [addresses, setaddress] = useState(AddressDetails);
  return (
    <div className="page-container">
      <NavBarUser />
      <div className="content-container">
        <div className="row">
          <div className="col-2">
            <NavbarVertical />
          </div>
          <div className="col-10">
            <h2
              className="page-header"
              style={{ fontWeight: "bold", fontSize: 30 }}
            >
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
                  placeholder="Apt,Suite,etc"
                  className="mt-3 form-control"
                />
                <div className="row mt-3">
                  <div className="col-6 form-group">
                    <select className="form-select ">
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
                      <option>Maharashta</option>
                      <option>Utter Pradesh</option>
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
                  <div className="col-6 justify-content-center">
                    <button type="submit" className="btn btn-success">
                      Confirm
                    </button>
                  </div>
                  <div className="col-6 justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-danger "
                      style={{ backgroundColor: "red" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              {addresses.map((address) => {
                return (
                  <div className="col ml-10">
                    <Address
                      addressType={address["addressType"]}
                      streetName={address["streetName"]}
                      Suite={address["Suite"]}
                      Country={address["Country"]}
                      State={address["State"]}
                      City={address["City"]}
                      zip={address["zip"]}
                    />
                  </div>
                );
              })}
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
