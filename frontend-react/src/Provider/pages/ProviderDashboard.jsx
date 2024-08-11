import React, { useEffect, useState } from "react";
import AdminCards from "../../Admin/cards/AdminCards";
import { toast } from "react-toastify";
//import AdminChart from "../../Admin/cards/AdminChart";
import { Row, Col } from "react-bootstrap";
import { getBookingsById, getOrdersById } from "../services/provider";

const ProviderDashboard = () => {
  const [revenue, setRevenue] = useState("");
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  const [pendingCount, setPendingCount] = useState("");
  useEffect(() => {
    loadOrders();
    loadBookings();
  }, []);
  const loadBookings = async function () {
    const result = await getBookingsById();
    if (result["status"] === "error") toast.error("unable to fetch bookings");
    else {
      toast.success("bookings fetched successfully");
      setBookings(result["data"]);
      setPendingCount(bookings.length);
    }
  };
  const loadOrders = async function () {
    const result = await getOrdersById();
    if (result["status"] === "error") toast.error("unable to fetch orders");
    else {
      toast.success("orders fetched successfully");
      setOrders(result["data"]);

      //calculating revenue
      setRevenue(
        orders
          .map((order) => {
            return order.status === "COMPLETED";
          })
          .reduce((accumulator, order) => {
            return (accumulator += order.rate);
          }, 0)
      );
      setTotalCount(orders.length);
    }
  };
  return (
    <div>
      <Row>
        <Col>
          <AdminCards
            title="Revenue Earned"
            count={revenue}
            backcolor="green"
          />
        </Col>
        <Col>
          <AdminCards
            title="Pending Orders"
            count={pendingCount}
            backcolor="red"
          />
        </Col>
        <Col>
          <AdminCards
            title="Total Orders"
            count={totalCount}
            backcolor={"blue"}
          />
        </Col>
      </Row>
      <Row>
        <Col>{/* <AdminChart /> */}</Col>
      </Row>
    </div>
  );
};

export default ProviderDashboard;
