import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { toast } from "react-toastify";

import { Table } from "react-bootstrap";
import { AllOrders } from "../components/orders";
import { getOrdersById } from "../services/provider";

export default function ProviderOrders(params) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);
  async function loadOrders() {
    const result = await getOrdersById();
    console.log(result["data"]);

    if (result["status"] === "error") toast.error("unable to load data");
    else {
      toast.success("data loaded");
      setOrders(result["data"]);
    }
  }

  return (
    <Row>
      <Row>
        <Table
          responsive
          hover
          className="table-xs table-pin-rows table-pin-cols"
        >
          <thead className="adminUser-head">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order Id
              </th>
              <th scope="col" className="px-6 py-3">
                UserName
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Revenue
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Action
              </th> */}
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="adminUser-body">
            {orders.map((order) => {
              return (
                <AllOrders
                  id={order.order_id}
                  name={order.first_name + " " + order.last_name}
                  address={`
                    ${order.house_no}, ${order.street}, 
                    ${order.city} ${order.pincode},
                    ${order.state}
                    `}
                  date={order.order_date}
                  revenue={order.order_rate}
                  status={order.status}
                />
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Row>
  );
}
