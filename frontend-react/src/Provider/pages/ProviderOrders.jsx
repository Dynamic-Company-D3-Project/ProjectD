import { Container, Row, Col } from "react-bootstrap";
import ProviderNavBar from "../components/ProviderNavBar";
import ProviderSidebar from "../components/ProviderSidebar";
import { Table } from "react-bootstrap";

export default function ProviderOrders(params) {
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
                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="adminUser-body">
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            B22101547
                          </th>
                          <td class="px-6 py-4">Arya</td>
                          <td class="px-6 py-4">Tinsel</td>
                          <td class="px-6 py-4">22/05/2222</td>
                          <td class="px-6 py-4">2500</td>
                          <td class="px-6 py-4">
                            <div>
                              <button
                                type="button"
                                class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                              >
                                Support
                              </button>
                            </div>
                          </td>
                          <td class="px-6 py-4">Completed</td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            C33398712
                          </th>
                          <td class="px-6 py-4">John Doe</td>
                          <td class="px-6 py-4">Smith</td>
                          <td class="px-6 py-4">10/06/2024</td>
                          <td class="px-6 py-4">1800</td>
                          <td class="px-6 py-4">
                            <div>
                              <button
                                type="button"
                                class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                              >
                                Support
                              </button>
                            </div>
                          </td>
                          <td class="px-6 py-4">Pending</td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            A98765432
                          </th>
                          <td class="px-6 py-4">Jane Smith</td>
                          <td class="px-6 py-4">Williams</td>
                          <td class="px-6 py-4">15/05/2024</td>
                          <td class="px-6 py-4">3000</td>
                          <td class="px-6 py-4">
                            <div>
                              <button
                                type="button"
                                class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                              >
                                Support
                              </button>
                            </div>
                          </td>
                          <td class="px-6 py-4">Pending</td>
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
