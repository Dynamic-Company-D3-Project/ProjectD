import NavbarVertical from "../components/NavbarVertical";
import { Link, useNavigate } from "react-router-dom";
import BookingDeatils from "../dummy/PastBookingDetails.json";
import { useEffect,useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarUser from "../components/NavBarUser";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { SPRING_URL } from "../services/Service";

function PastBookings() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    loadBookings();
  },[])

  const token = sessionStorage.getItem('authToken');
  const loadBookings = async ()=>{
    try{
      const bookingResponse = await axios.get(`${SPRING_URL}/order/getOrders`,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(bookingResponse.data)
       setBookings(bookingResponse.data); 
       setIsLoading(false);
    }catch(error)
    {
      setIsLoading(false);
      setError("Error fetching the data! Try again");
      toast.error("Error fetching the data! Try again");
      console.error("There was an error fetching the data!", error);
    }
  }

  const naviage = useNavigate();
  const onRaiseSupport = () => {
    naviage("/support");
  };
  return (
    <div className="page-container">
      <NavBarUser />
      <div className="content-container">
        <div className="row">
          <div className="col-2">
            <NavbarVertical />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-2 text-center">
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
            {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!isLoading && !error && (
          <>
            <div className="mt-3">
            {bookings.length == 0 && (
                    <h3 style={{ textAlign: "center", color: "red" }}>
                      There are no Past Bookings !!
                    </h3>
                )}
                {bookings.length > 0 && (
              <div className="row">
                <div className="col-10"></div>
                <div className="col-2" style={{ display: "inline-flex" }}>
                  <Link to={"/support"} className="btn btn-primary bt-sm me-2">
                    <span class="bi-info-circle-fill"></span>
                  </Link>
                  <h6 className="mt-2">Raise Support</h6>
                </div>
              </div>
              )}
              {bookings.length > 0 && (
              <table className="table table-striped table-bordered shadow-xl">
                <thead style={{ fontSize: 18 }}>
                  <tr>
                    <th>Order Id</th>
                    <th>Service</th>
                    <th>Rate</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Provider Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => {
                    return (
                      <tr>
                        <td>{booking["orderId"]}</td>
                        <td>{booking["subcategory_id"]}</td>
                        <td>{booking["rate"]}</td>
                        <td>{booking["date"]}</td>
                        <td>{booking["time"]}</td>
                        <td>{booking["provider_id"]}</td>
                        <td>{booking["status"]}</td>
                        <td>
                          <button
                            onClick={() => {
                              onRaiseSupport();
                            }}
                            type="button"
                            className="btn btn-primary bt-sm me-2"
                          >
                            <span class="bi-info-circle-fill"></span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              )}
            </div>
            </>)}
          </div>
        </div>
      </div>

      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}
export default PastBookings;
