import { Container, Row, Col } from "react-bootstrap";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";
import { Table } from "react-bootstrap";
import axios from 'axios';
import config  from "../../config";
import { useState,useEffect } from 'react';

export default function AdminOrders(params) {
  const [orders, setOrders]= useState([]);

  useEffect(()=>{
    axios.get(`${config.dotNetApi}Admin/orders`)
    .then(response=> {
      setOrders(response.data);
    }).catch(error=>{
      console.log(error);
    })
  },[])
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
                            Order Id
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
                         
                        </tr>
                      </thead>
                      <tbody className="adminUser-body">
                        {orders.map((order) =>{
                          return <tr>
                          <td className="px-6 py-4">{order.orderId}</td>
                          <td className="px-6 py-4">{order.userId}</td>
                          <td className="px-6 py-4">{order.orderDate.split('T')[0]}</td>
                          <td className="px-6 py-4">{order.subcategory.price }</td>
                          <td className="px-6 py-4">{order.subcategory.categoryName }</td>
                          <td className={`px-6 py-4   text-center text-white`}>
                            {order.status}
                          </td>
                          
                        </tr>
                        })}
                        
                       
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
