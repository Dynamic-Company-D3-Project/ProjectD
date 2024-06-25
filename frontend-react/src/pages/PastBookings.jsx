import NavBar from '../components/NavBar'
import NavbarVertical from '../components/NavbarVertical'
import { Link , useNavigate } from "react-router-dom";
import BookingDeatils from "../dummy/PastBookingDetails.json"
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function PastBookings(){
    const [bookings , setBookings] = useState(BookingDeatils)
    const naviage = useNavigate()
    const onRaiseSupport = ()=>{
        naviage('/Support')
    }
    return(
        <div>
            <NavBar />
            <div className='row'>
                <div className='col-2'>
                <NavbarVertical />
                </div>
                <div className='col-10'>
                <div className='row'>
                    <div className='col-2 text-center'><Link to="/CurrentBookings" className="rounded-pill mt-3 mx-auto d-block bg-info margin:20%">Current Bookings</Link></div>
                    <div className='col-2 text-center'><Link to="/PastBookings" className="rounded-pill mt-3 mx-auto d-block bg-info">Past Bookings</Link></div>
                </div>
            <h2 className='page-header' style={{fontWeight:"bold", fontSize:30}}>Booking Details</h2>
            <div className='mt-3'>
            <div className='row'>
                        <div className='col-10'></div>
                        <div className='col-2'style={{display:"inline-flex"}}>
                        <button className="btn btn-primary bt-sm me-2"><span class="bi-info-circle-fill"></span></button>
                        <h6 className="mt-2" >Raise Support</h6>
                        </div>
                    </div>
                    <table className='table table-striped table-bordered shadow-xl'>
                        <thead style={{fontSize:18}}>
                            <tr>
                                <th>Booking Id</th>
                                <th>Service</th>
                                <th>Rate</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Provider Id</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                    {bookings.map((booking)=>{
                        return <tr>
                        <td>{booking['bookingId']}</td>
                        <td>{booking['service']}</td>
                        <td>{booking['rate']}</td>
                        <td>{booking['date']}</td>
                        <td>{booking['time']}</td>
                        <td>{booking['providerId']}</td>
                        <td>{booking['status']}</td>
                        <td>
                            <button onClick={()=>{
                                onRaiseSupport()
                            }} type='button' className="btn btn-primary bt-sm me-2"><span class="bi-info-circle-fill"></span></button>
                        </td>
                        </tr>
                    })}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}
export default PastBookings