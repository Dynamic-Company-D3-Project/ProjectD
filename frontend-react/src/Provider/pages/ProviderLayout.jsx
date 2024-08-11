// Layout.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProviderNavBar from "../components/ProviderNavBar";
import ProviderSidebar from "../components/ProviderSidebar";

const Layout = ({ children }) => {
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
              <Container className="my-4">{children}</Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
