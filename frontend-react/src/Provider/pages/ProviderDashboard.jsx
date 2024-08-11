import React from "react";
import AdminCards from "../../Admin/cards/AdminCards";
import AdminChart from "../../Admin/cards/AdminChart";
import ProviderNavBar from "../components/ProviderNavBar";
import ProviderSidebar from "../components/ProviderSidebar";
import { Container, Row, Col } from "react-bootstrap";

const ProviderDashboard = () => {
  return (
    <div className="page-container">
      <ProviderNavBar />
      <div className="content-container">
        <Container fluid>
          <Row>
            <Col xs={2} className="bg-light">
              <ProviderSidebar />
            </Col>
            <Col xs={10}>
              <Container className="my-4">
                <Row>
                  <Col>
                    <AdminCards
                      title="Revenue Earned"
                      count={"$ 2000"}
                      backcolor="green"
                    />
                  </Col>
                  <Col>
                    <AdminCards
                      title="Pending Orders"
                      count={5}
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

export default ProviderDashboard;
