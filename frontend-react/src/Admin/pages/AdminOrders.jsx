import { Container, Row, Col } from "react-bootstrap";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";
import { Table } from "react-bootstrap";

export default function AdminOrders(params) {
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
                  <Row>
                    <Table
                      responsive
                      hover
                      className="table-xs table-pin-rows table-pin-cols"
                    >
                      <thead className="adminUser-head">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Booking Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            User Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Price
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Subcategory
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Remark
                          </th>
                        </tr>
                      </thead>
                      <tbody className="adminUser-body">
                        <tr>
                          <td className="px-6 py-4">B10154789</td>
                          <td className="px-6 py-4">C85896541</td>
                          <td className="px-6 py-4">12/02/2024</td>
                          <td className="px-6 py-4">2500</td>
                          <td className="px-6 py-4">AC Servicing</td>
                          <td className="px-6 py-4 bg-success text-center text-white">
                            Done
                          </td>
                          <td className="px-6 py-4"></td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4">B23498762</td>
                          <td class="px-6 py-4">A12345678</td>
                          <td class="px-6 py-4">05/06/2024</td>
                          <td class="px-6 py-4">1800</td>
                          <td class="px-6 py-4">Plumbing Repair</td>
                          <td class="px-6 py-4 bg-success text-center text-white">
                            Done
                          </td>
                          <td class="px-6 py-4"></td>
                        </tr>

                        <tr>
                          <td class="px-6 py-4">C98765432</td>
                          <td class="px-6 py-4">B98765432</td>
                          <td class="px-6 py-4">20/05/2024</td>
                          <td class="px-6 py-4">3200</td>
                          <td class="px-6 py-4">Electrical Inspection</td>
                          <td class="px-6 py-4 bg-danger text-center text-white">
                            Cancelled
                          </td>{" "}
                          <td class="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
