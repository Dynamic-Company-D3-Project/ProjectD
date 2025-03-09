import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBarUser from "../components/NavBarUser";

const ContactUs = () => {
  const token = sessionStorage.getItem("authToken");


  return (
    <div className="page-container">
      {token ? <NavBarUser /> : <NavBar />}
      <div
        className="content-container flex-col user-contactUs"
        style={{ gap: "10px" }}
      >
        <div className="text-center categoryHeading fw-bold mt-2 mb-2">
          <h1>Contact Us</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="text-center w-50">
            <p className="font-semibold leading-loose">
              We love questions and feedback - and we're always happy to help!
              Here are some ways to get in touch with us.
            </p>
          </div>
        </div>
        <div
          className="d-flex mt-2 justify-content-evenly"
          style={{ width: "80%", margin: "auto", height: "80%" }}
        >
          <div
            className="p-5"
            style={{ border: "2px solid black", borderRadius: "30px" }}
          >
            <h4 className="text-center text-xl  fw-bold">
              Send us a message
            </h4>
            <p className="text-center mb-4 textarea-success ">
              Send us a message and we'll get back to you as soon as we can.
            </p>
            <form>
              <div className="d-flex mb-5 m">
                <input
                  type="text"
                  className="form-control me-3"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex">
                <input
                  type="mobile"
                  className="form-control me-3"
                  placeholder="Mobile Number"
                />
                <select className="form-select" name="category" id="category">
                  <option value="" disabled selected>
                    Category
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="billing">Billing</option>
                  <option value="technical">Technical Issue</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="partnership">Partnership</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>

              </div>
              <textarea
                className="form-control mt-5"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button className="btn btn-primary mt-3 ">
                Send Message
              </button>
            </form>
          </div>

          <div
            className="p-5"
            style={{ border: "2px solid black", borderRadius: "30px" }}
          >
            <h4 className="text-center text-xl fw-bold">
              Contact Information
            </h4>
            <p className="text-center mb-4 ">
              You can also reach us by phone or email.
            </p>
            <div className="d-flex justify-content-center align-items-center w-auto">
              <div className="mt-5 text-base d-flex  flex-column justify-content-evenly align-items-center w-auto">
                <p className="fw-bold">Hinjewadi, Pune</p>
                <p className="fw-bold">contact@company.com</p>
                <p className="fw-bold">+91 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
