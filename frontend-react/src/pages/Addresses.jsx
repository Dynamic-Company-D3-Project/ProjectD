import { useState, useEffect } from "react";
import NavbarVertical from "../components/NavbarVertical";
import Address from "../components/Address";
import Footer from "../components/Footer";
import NavBarUser from "../components/NavBarUser";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";

function Addresses() {
  const [addresses, setAddresses] = useState({
    home: [],
    office: [],
    other: [],
  });
  const [addressType, setAddressType] = useState("");
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    houseNo: "",
    addressType: ""
  })
  const token = sessionStorage.getItem('authToken');

  let [updateAddress, setUpdateAddress] = useState(addresses)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateAddress((prevData) => ({
      ...prevData, [name]: value,
    }));
  }
  useEffect(() => {
    loadAddresses();
  }, []);
  useEffect(() => {
    if (addressType) {
      loadSpecificAddress();
    }
  }, [addressType])

  async function loadSpecificAddress() {
    try {
      const specificAddress = await axios.get(`${SPRING_URL}/user/getAddressOnType`, {
        headers: {
          Authorization: `Bearer ${token}`
        }, params: {
          aEnum: addressType.toUpperCase()
        }
      })
      // console.log(specificAddress.data)
      setAddress(specificAddress.data)
      setUpdateAddress(specificAddress.data)
      // console.log(specificAddress.data.addressId)
if(specificAddress.data.addressId==null){
  setUpdateAddress({
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    houseNo: "",
    addressType:`${addressType.toUpperCase()}`
  })
}
    } catch (error) {
       toast.error("error loading address on type")
    }
  }

  const handleReset = () => {
    // Reset address fields to empty values
    setUpdateAddress({
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      houseNo: "",
      addressType: ""
    });
    setAddressType("");
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(`${SPRING_URL}/user/updateAddress`, updateAddress, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //     //console.log(response.data)
  //     if (response == null) {
  //       toast.error("Error updating the address")
  //     }
  //     else {
  //       toast.success("Address updated successfully")
  //       loadAddresses();
  //       setUpdateAddress(response.data)
  //       setAddress(response.data)
  //     }
  //   } catch (error) {
  //     toast.error("Error updating the Address")
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (address.addressId) {
        const response = await axios.put(`${SPRING_URL}/user/updateAddress`, updateAddress, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        toast.success("Address updated successfully");
        setAddress(response.data);
        setUpdateAddress(response.data);
      } else {
        await axios.post(`${SPRING_URL}/user/address`, updateAddress, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        toast.success("Address added successfully");
      }
      loadAddresses();
    } catch (error) {
      toast.error("Error updating or adding the address");
    }
  };
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
      setAddresses([]);
    }
  }
  const handleCancel = (e) => {
    e.preventDefault();
    setUpdateAddress(address)
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
                Update OR Add Address :
              </h5>
              <div
                className="border border-dark text-center shadow-xl"
                style={{ height: 370, width: 700, borderRadius: 10 }}
              >
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Street name"
                    className="form-control mt-2"
                    name="street"
                    value={updateAddress.street}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="House No"
                    className="mt-3 form-control"
                    name="houseNo"
                    value={updateAddress.houseNo}
                    onChange={handleChange}
                  />
                  <div className="row mt-3">
                    <div className="col-6 form-group">
                      <select className="form-select"
                        name="country"
                        value={updateAddress.country}
                        onChange={handleChange}
                      >
                        <option value="" disabled selected hidden>
                          Country
                        </option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select className="form-select"
                        name="state"
                        value={updateAddress.state}
                        onChange={handleChange}
                      >
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
                        name="city"
                        value={updateAddress.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        placeholder="Zip-Postal code"
                        className="form-control"
                        name="pincode"
                        value={updateAddress.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <select className="form-select"
                        name="addressType"
                        onChange={(e) => setAddressType(e.target.value)}
                      >
                        <option value="" disabled selected hidden>
                          Address Type
                        </option>
                        <option>Home</option>

                        <option>Office</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex justify-content-between">
                      <button type="submit" className="btn btn-success">
                        Confirm
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ backgroundColor: "red" }}
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                </form>
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
