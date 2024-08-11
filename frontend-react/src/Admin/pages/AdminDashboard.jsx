import React from "react";
import AdminCards from "../cards/AdminCards";
//import AdminChart from "../cards/AdminChart";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";
import { Container, Row, Col } from "react-bootstrap";

const AdminDashboard = () => {
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
                      count={10}
                      backcolor="yellow"
                    />
                  </Col>
                  <Col>
                    <AdminCards
                      title="Completed Orders"
                      count={200}
                      backcolor="green"
                    />
                  </Col>
                  <Col>
                    <AdminCards
                      title="Pending Orders"
                      count={20}
                      backcolor="red"
                    />
                  </Col>
                  <Col>
                    <AdminCards
                      title={"Total Orders"}
                      count={250}
                      backcolor={"blue"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>{/* <AdminChart /> */}</Col>
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
