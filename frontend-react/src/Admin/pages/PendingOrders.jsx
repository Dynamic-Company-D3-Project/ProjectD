import AdminNavBar from '../components/AdminNavBar';
import NavbarVertical from '../components/NavbarVerticalAdmin'
import { Link , useNavigate } from "react-router-dom";
import PendingOrdersList from "../Dummy/PendingOrdersList.json"
import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import config  from "../../config";

function PendingOrders(){
    const [orders , setOrders] = useState([""])
    const OnDelete = (index)=>{
        orders.splice(index,1)
        setOrders([...orders])
     }    
    const navigate = useNavigate()
    const  onAssign = (subcatid)=>{
        const selectedOrder = orders.find(order => order.subcategoryId === subcatid);
    if (selectedOrder) {
      navigate('/PendingCardPage', { state: { order: selectedOrder } });
    }
    }

    useEffect(() => {
        axios.get(config.dotNetApi+"Admin/getOrders/pending")
            .then(response => {
                setOrders(response.data.result);
                console.log(response.data)
            })
            .catch(error => {
              console.log(error)
               
            });
    }, []);
         
       
    return(
        <div >
            <AdminNavBar />
            <div className='row'>
                <div className='col-2'>
                <NavbarVertical />
                </div>
                <div className='col-10'>
            <h2 className='page-header' style={{fontWeight:"bold", fontSize:30}}>Pending Orders</h2>
            <div className='mt-3'>
                {orders.length==0 && ( 
                  <h3 style={{textAlign:'center', color:'red'}}>There are no Pending Orders !!</h3>
                )}
            {orders.length > 0 &&(
             <div className='row'>
                        <div className='col-10'></div>
                        <div className='col-1'>
                        <button className="btn btn-success bt-sm me-2"><span class="bi-check"></span></button>
                        <h6>Assign</h6>
                        </div>
                        <div className='col-1'>
                        <button className="btn btn-danger bt-sm"><span class="bi-radioactive"></span></button>
                        <h6>Reject</h6>
                        </div>
             </div>
             )}
             {orders.length >0 &&(
                    <table className='table table-striped table-bordered shadow-xl'>
                    <thead style={{fontSize:20}}>
                        <tr>
                            <th>Booking Id</th>
                            <th>User Id</th>
                            <th>User Address</th>
                            <th>Gender</th>
                            <th>Sub Catagory</th>
                       
                            <th>Action</th>
                            <th>Booking Date & Time</th>
                        </tr>
                    </thead>
                <tbody>
                {orders.map((order)=>{
                    return <tr>
                    <td>{order['bookingId']}</td>
                    <td>{order['userId']}</td>
                    <td>{order['userAddress']}</td>
                    <td>{order['gender']}</td>
                    <td>{order['subcategoryId']}</td>
                    
                    <td>
                        <button onClick={()=>{
                            onAssign(order['subcategoryId'])
                        }} className="btn btn-success bt-sm me-2"><span class="bi-check"></span></button>
                        <button onClick={()=>{
                            OnDelete(order['bookingId'])
                        }} className="btn btn-danger bt-sm"><span class="bi-radioactive"></span></button>
                    </td>
                    <td>{order['bookingDate']} {order['bookingTime']}</td>
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
export default PendingOrders



