import React, { useState } from "react";
import ProviderSidebar from "../components/ProviderSidebar";
import ProviderNavBar from "../components/ProviderNavBar";
import { Container, Row, Col } from "react-bootstrap";

const ProviderSupport = () => {
  const [providerId, setProviderId] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [supportType, setSupportType] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const handleCancel = () => {
    setProviderId("");
    setBookingId("");
    setSupportType("");
    setIssueDescription("");
  };
  const supportTypes = [
    "General Inquiry",
    "Technical Support",
    "Billing Issues",
    "Account Management",
    "Feature Request",
    "Feedback",
    "Complaint",
    "Bug Report",
    "Service Request",
    "Other",
  ];

  return (
    <div className="provider-support page-container">
      <ProviderNavBar />
      <div className=" content-container row">
        <div className="col-2">
          <ProviderSidebar />
        </div>
        <div className="col-10">
          <br />
          <Row>
            <h1 className="page-header fw-bold text-center "> Support </h1>
          </Row>
          <Row>
            <h4 className="text-center">
              We love questions and feedback - and we're always happy to help!
            </h4>
            <h5 className="text-center text-secondary">
              Here are some ways to get in touch with us.
            </h5>
            <br />
            <br />
            <div
              className="p-5"
              style={{
                border: "2px solid black",
                borderRadius: "30px",
                width: "70%",
                margin: "auto",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <h5 className="text-center text-dark fw-bold fs-3">
                Send us a message
              </h5>
              <p className="text-center mb-4 text-secondary">
                Send us a message and we'll get back to you as soon as we can.
              </p>
              <div className="d-flex mb-5 m">
                <input
                  type="text"
                  className="form-control me-3"
                  placeholder="Provider ID"
                  value={providerId}
                  onChange={(e) => setProviderId(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Booking ID"
                  value={bookingId}
                  onChange={(e) => setBookingId(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <select
                  className="form-select"
                  value={supportType}
                  onChange={(e) => setSupportType(e.target.value)}
                >
                  {" "}
                  <option value="" disabled selected>
                    Type of Support
                  </option>
                  {supportTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                className="form-control mt-5"
                rows="5"
                placeholder="Describe your issue"
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
              ></textarea>
              <button
                className="btn btn-danger mt-3 me-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button className="btn btn-primary mt-3 text-white">
                Send Message
              </button>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProviderSupport;
