import AdminNavBar from '../components/AdminNavBar';
import NavbarVertical from '../components/NavbarVerticalAdmin'
import OngoingOrdersdata from '../Dummy/OngoingOrdersData.json'
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function OngoingOrders(){
  const [orders , setOrders] = useState(OngoingOrdersdata)
  const OnDelete = (index)=>{
      orders.splice(index,1)
      setOrders([...orders])
   }    
   const OnComplete = (index)=>{
    orders.splice(index,1)
    setOrders([...orders])
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
                          <th>Price</th>
                          <th>Action</th>
                          <th>Provider Id</th>
                      </tr>
                  </thead>
              <tbody>
              {orders.map((order)=>{
                  return <tr>
                  <td>{order['BookingId']}</td>
                  <td>{order['UserId']}</td>
                  <td>{order['Date']}</td>
                  <td>{order['Time']}</td>
                  <td>{order['Price']}</td>
                  <td>
                      <button onClick={()=>{
                        OnComplete(order['BookingId'])
                      }} className="btn btn-success bt-sm me-2"><span class="bi-check"></span></button>
                      <button onClick={()=>{
                          OnDelete(order['BookingId'])
                      }} className="btn btn-danger bt-sm"><span class="bi-radioactive"></span></button>
                  </td>
                  <td>{order['ProviderId']}</td>
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