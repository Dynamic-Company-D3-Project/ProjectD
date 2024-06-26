import NavBar from "../components/NavBar";
import NavbarVertical from "../components/NavbarVertical";
import { Link, useNavigate } from "react-router-dom";
import BookingDeatils from "../dummy/BookingDetails.json";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../components/Footer";
import NavBarUser from "../components/NavBarUser";

function CurrentBookings() {
  const [bookings, setBookings] = useState(BookingDeatils);
  const OnDelete = (index) => {
    bookings.splice(index, 1);
    setBookings([...bookings]);
  };

  const navigate = useNavigate();

  const onSupport = () => {
    navigate("/support");
  };

  return (
    <div className="page-container">
      <NavBarUser />
      <div className="content-container container-fluid">
        <div className="row">
          <div className="col-2">
            <NavbarVertical />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-2 text-center ">
                <Link
                  to="/bookings"
                  className="rounded-pill mt-3 mx-auto d-block bg-info margin:20%"
                >
                  Current Bookings
                </Link>
              </div>
              <div className="col-2 text-center">
                <Link
                  to="/bookings/past"
                  className="rounded-pill mt-3 mx-auto d-block bg-info"
                >
                  Past Bookings
                </Link>
              </div>
            </div>
            <div className="categoryHeader page-header fw-bold text-3xl">
              <h2>Booking Details</h2>
            </div>
            <div className="mt-3">
              {bookings.length == 0 && (
                <h3 style={{ textAlign: "center", color: "red" }}>
                  There are no Current Booking !!
                </h3>
              )}
              {bookings.length > 0 && (
                <div className="row">
                  <div className="col-10"></div>
                  <div className="col-1">
                    <Link
                      to={"/support"}
                      className="btn btn-primary bt-sm me-2"
                    >
                      <span class="bi-person-raised-hand"></span>
                    </Link>
                    <h6>Support</h6>
                  </div>
                  <div className="col-1">
                    <button
                      className="btn btn-danger bt-sm"
                      style={{ backgroundColor: "red" }}
                    >
                      <span class="bi-radioactive"></span>
                    </button>
                    <h6>Delete</h6>
                  </div>
                </div>
              )}
              {bookings.length > 0 && (
                <table className="table table-striped table-bordered shadow-xl">
                  <thead style={{ fontSize: 18 }}>
                    <tr>
                      <th>Booking Id</th>
                      <th>Service</th>
                      <th>Rate</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Provider Id</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => {
                      return (
                        <tr>
                          <td>{booking["bookingId"]}</td>
                          <td>{booking["service"]}</td>
                          <td>{booking["rate"]}</td>
                          <td>{booking["date"]}</td>
                          <td>{booking["time"]}</td>
                          <td>{booking["providerId"]}</td>
                          <td>
                            <button
                              onClick={() => {
                                onSupport();
                              }}
                              className="btn btn-primary bt-sm me-2"
                            >
                              <span class="bi-person-raised-hand"></span>
                            </button>
                            <button
                              onClick={() => {
                                OnDelete(booking["bookingId"]);
                              }}
                              className="btn btn-danger bt-sm"
                              style={{ backgroundColor: "red" }}
                            >
                              <span class="bi-radioactive"></span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
export default CurrentBookings;
