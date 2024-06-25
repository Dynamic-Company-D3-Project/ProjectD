import { useState } from 'react'
import NavBar from '../components/NavBar'
import NavbarVertical from '../components/NavbarVertical'


function UserDetails(){

    return(
        <div >
            <NavBar />
            <div className='row'>
                <div className='col-2'>
                <NavbarVertical />
                </div>
                <div className='col-10'>
            <h2 className='page-header' style={{fontWeight:"bold", fontSize:30}}>Personal Information</h2>
            <div className='row mt-5'>
                <div className='col-6'>
                    <input className="form-control" type="text" name="FirstName" placeholder="First Name"/>
                </div>
                <div className='col-6'>
                    <input className="form-control " type="text"  placeholder="Last Name" />
                </div>
            </div>
            <div className='row mt-5'>
                 <div>
                    <input  className="form-control " type="email" placeholder="Email"/>
                 </div>
            </div>
            <div className='row mt-5'>
                 <div>
                    <input className="form-control " type="text"  placeholder="Address" />
                 </div>
            </div>
            <div className='row mt-5'>
                 <div className='col-6'>
                    <input className="form-control " type="text"  placeholder="Mobile Number" />
                 </div>
            </div>
            <div className='row mt-5'>
                 <div className='col-6'>
                    <input className="form-control " type="date" />
                 </div>
            </div>
            <div className='row mt-5'>
                 <div className='col-6 form-group'>
                    <select className="form-select" >
                    <option value="" disabled selected hidden>Gender</option>
                        <option >Male</option>
                        <option >Female</option>
                        <option >other</option>
                    </select>
                 </div>
            </div>
                </div>
            </div>
        </div>
    )
}
export default UserDetails