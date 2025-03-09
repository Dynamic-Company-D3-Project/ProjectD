
import React, { useState, useEffect } from 'react';
import AdminCards from "../cards/AdminCards";
import AdminChart from "../cards/AdminChart";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import config  from "../../config";

const AdminDashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
        axios.get(config.dotNetApi+"admin/Dashboard/order-status-counts")
            .then(response => {
                setData(response.data);
                console.log(response.data)
            })
            .catch(error => {
              console.log(error)
               
            });
    }, []);
  return (
    <div className="page-container">
      <AdminNavBar />
      <div className="content-container">
        <Container fluid>
          <Row>
            <Col xs={2} className="bg-light">
              <AdminSidebar />
            </Col>
            <Col xs={10}>
              <Container className="my-4">
                <Row>
                  <Col>
                    <AdminCards
                      title="Ongoing Orders"
                      count={data.ongoing}
                      backcolor="yellow"
                    />
                  </Col>
                  <Col>
                    <AdminCards
                      title="Completed Orders"
                      count={data.completed}
                      backcolor="green"
                    />
                  </Col>
                  <Col>
                    <AdminCards
                      title="Pending Orders"
                      count={data.pending}
                      backcolor="red"
                    />
                  </Col>
                  <Col>
                    <AdminCards
                      title={"Total Orders"}
                      count={data.allOrders}
                      backcolor={"blue"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AdminChart />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AdminDashboard;
