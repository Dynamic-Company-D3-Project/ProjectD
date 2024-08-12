import AdminNavBar from '../components/AdminNavBar';
import NavbarVertical from '../components/NavbarVerticalAdmin'
import OngoingOrdersdata from '../Dummy/OngoingOrdersData.json'
import { useState,useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import config  from "../../config";

function OngoingOrders(){
  const [orders , setOrders] = useState([""])
  useEffect(() => {
    axios.get(config.dotNetApi+"Admin/getOrders/ongoing")
        .then(response => {
            setOrders(response.data.result);
            console.log(response.data)
        })
        .catch(error => {
          console.log(error)
           
        });
}, []);
  const OnDelete = (index)=>{
    //   orders.splice(index,1)
    //   setOrders([...orders])
   }    
   const OnComplete = (id)=>{
    // const orderId = orders[index].id; 

    
    axios.put(`${config.dotNetApi}Admin/getOrders/ongoing/${id}/set-complete`)
      .then(response => {
        if (response.status === 200) {
         
          const updatedOrders = orders.filter(order => order.bookingId != id);
          setOrders(updatedOrders);
        }
      })
      .catch(error => {
        console.log(error);
      });
    // orders.splice(index,1)
    // setOrders([...orders])
 }   
  return(
      <div >
          <AdminNavBar />
          <div className='row'>
              <div className='col-2'>
              <NavbarVertical />
              </div>
              <div className='col-10'>
          <h2 className='page-header' style={{fontWeight:"bold", fontSize:30}}>Ongoing Orders</h2>
          <div className='mt-3'>
              {orders.length==0 && ( 
                <h3 style={{textAlign:'center', color:'red'}}>There are no Ongoing Orders !! </h3>
              )}
          {orders.length > 0 &&(
           <div className='row'>
                      <div className='col-10'></div>
                      <div className='col-1'>
                      <button className="btn btn-success bt-sm me-2"><span class="bi-check"></span></button>
                      <h6>Completed</h6>
                      </div>
                      <div className='col-1'>
                      <button className="btn btn-danger bt-sm"><span class="bi-radioactive"></span></button>
                      <h6>Cancel</h6>
                      </div>
           </div>
           )}
           {orders.length >0 &&(
                  <table className='table table-striped table-bordered shadow-xl'>
                  <thead style={{fontSize:20}}>
                      <tr>
                          <th>Booking Id</th>
                          <th>User Id</th>
                          <th>Date</th>
                          <th>Time</th>
                          {/* <th>Price</th> */}
                          <th>Action</th>
                          <th>Provider Id</th>
                      </tr>
                  </thead>
              <tbody>
              {orders.map((order)=>{
                  return <tr>
                  <td>{order['bookingId']}</td>
                  <td>{order['userId']}</td>
                  <td>{order['bookingDate']}</td>
                  <td>{order['bookingTime']}</td>
                  {/* <td>{order['Price']}</td> */}
                  <td>
                      <button onClick={()=>{
                        OnComplete(order['bookingId'])
                      }} className="btn btn-success bt-sm me-2"><span class="bi-check"></span></button>
                      <button onClick={()=>{
                          OnDelete(order['BookingId'])
                      }} className="btn btn-danger bt-sm"><span class="bi-radioactive"></span></button>
                  </td>
                  <td>{2}</td>
                  </tr>
              })}
              </tbody>
              </table>
                  )}
              </div>
              </div>
          </div>
      </div>
  )
}

export default OngoingOrders