import React from "react";
import AdminNavbar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useState } from "react";
import Footer from "../../components/Footer";
const AdminUserDetails = () => {
  const [search, setSearch] = useState();
  const initialUsers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      area: "Kharadi, Pune",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      gender: "Female",
      area: "Wakad, Pune",
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Smith",
      gender: "Male",
      area: "Hinjewadi, Pune",
    },
    {
      id: 4,
      firstName: "Alice",
      lastName: "Johnson",
      gender: "Female",
      area: "Magarpatta, Pune",
    },
    {
      id: 5,
      firstName: "Mike",
      lastName: "Brown",
      gender: "Male",
      area: "Baner, Pune",
    },
    {
      id: 6,
      firstName: "Emily",
      lastName: "Davis",
      gender: "Female",
      area: "Viman Nagar, Pune",
    },
    {
      id: 7,
      firstName: "Jack",
      lastName: "Wilson",
      gender: "Male",
      area: "Kothrud, Pune",
    },
    {
      id: 8,
      firstName: "Sophia",
      lastName: "Martinez",
      gender: "Female",
      area: "Aundh, Pune",
    },
    {
      id: 9,
      firstName: "Liam",
      lastName: "Garcia",
      gender: "Male",
      area: "Hadapsar, Pune",
    },
    {
      id: 10,
      firstName: "Olivia",
      lastName: "Lopez",
      gender: "Female",
      area: "Pimple Saudagar, Pune",
    },
    {
      id: 11,
      firstName: "Noah",
      lastName: "Hernandez",
      gender: "Male",
      area: "Chinchwad, Pune",
    },
    {
      id: 12,
      firstName: "Ava",
      lastName: "Gonzalez",
      gender: "Female",
      area: "Kondhwa, Pune",
    },
    {
      id: 13,
      firstName: "William",
      lastName: "Rodriguez",
      gender: "Male",
      area: "Bavdhan, Pune",
    },
    {
      id: 14,
      firstName: "Isabella",
      lastName: "Lewis",
      gender: "Female",
      area: "Warje, Pune",
    },
    {
      id: 15,
      firstName: "James",
      lastName: "Lee",
      gender: "Male",
      area: "Yerwada, Pune",
    },
  ];
  console.log(search);
  const [users, setUsers] = useState([...initialUsers]);
  const handleSearch = () => {
    const filteredUsers = users.filter((user) => user.id == search);

    setUsers(filteredUsers);
  };
  const resetSearch = () => {
    setUsers(initialUsers);
  };
  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };
  return (
    <div className="page-container">
      <AdminNavbar />
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
                    <div className="d-flex">
                      <input
                        className="form-control me-1"
                        type="number"
                        placeholder="User ID"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button
                        className="btn btn-primary"
                        onClick={handleSearch}
                      >
                        Search
                      </button>
                      <button
                        className="btn btn-danger ms-1"
                        onClick={resetSearch}
                      >
                        Reset
                      </button>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <h2 className="text-white text-center fw-bold">
                      User Details
                    </h2>
                  </Col>
                  <br />
                  <br />
                  <br />
                  <Row>
                    <Table
                      responsive
                      hover
                      className="table-xs table-pin-rows table-pin-cols"
                    >
                      <thead className="adminUser-head">
                        <tr>
                          <th>User ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Gender</th>
                          <th>Area</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="adminUser-body">
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.area}</td>
                            <td>
                              <button className="btn btn-warning me-2">
                                Edit
                              </button>
                              <button
                                className="btn bg-danger"
                                onClick={() => deleteUser(user.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
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
};

export default AdminUserDetails;
