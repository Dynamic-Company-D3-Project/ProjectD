import AdminNavBar from '../components/AdminNavBar';
import NavbarVerticalAdmin from '../components/NavbarVerticalAdmin'
import PendingTickets from '../Dummy/PendingTickets.json'
import { useState } from 'react';
import { Link } from "react-router-dom";

function AdminProviderSupport()
{
    const [bookings , setBookings] = useState(PendingTickets)
    return(
        <div id='currentBooking'>
            <AdminNavBar/>
            <div className='row'>
                <div className='col-2'>
                <NavbarVerticalAdmin />
                </div>
                <div className='col-10'>
                <div className='row d-flex justify-content-end mr-3'>
                    <div className='col-2 text-center '><Link to="/admin/support-provider" className="rounded-pill mt-3 mx-auto d-block bg-info margin:20%">Provider Support</Link></div>
                    <div className='col-2 text-center'><Link to="/admin/support-user" className="rounded-pill mt-3 mx-auto d-block bg-info">User Support</Link></div>
                </div>
                <h2 className='page-header' style={{fontWeight:"bold", fontSize:30}}>Providers Support</h2>
             <h4 className='mt-3' style={{fontWeight:"bold", fontSize:25}}>Pending Tickets</h4>
                    <table className='table table-striped table-bordered shadow-xl'>
                        <thead style={{fontSize:20}}>
                            <tr>
                                <th>Booking Id</th>
                                <th>Ticket No</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                    {bookings.map((booking)=>{
                        return <tr>
                        <td>{booking['BookingId']}</td>
                        <td>{booking['TicketNo']}</td>
                        <td>{booking['Type']}</td>
                        <td>{booking['Description']}</td>
                        <td>
                            <button className="btn btn-primary bt-sm">Resolve</button>
                        </td>
                        </tr>
                    })}
                    </tbody>
                    </table>
                    <h4 className='mt-3' style={{fontWeight:"bold", fontSize:25}}>Resolved Tickets</h4>
                    <table className='table table-striped table-bordered shadow-xl'>
                        <thead style={{fontSize:20}}>
                            <tr>
                                <th>Booking Id</th>
                                <th>Ticket No</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                    {bookings.map((booking)=>{
                        return <tr>
                        <td>{booking['BookingId']}</td>
                        <td>{booking['TicketNo']}</td>
                        <td>{booking['Type']}</td>
                        <td>{booking['Description']}</td>
                        <td>
                            <button className="btn btn-success bt-sm">Resolved</button>
                        </td>
                        </tr>
                    })}
                    </tbody>
                    </table>
                </div>
            </div>
        
        </div>
    )
}

export default AdminProviderSupport