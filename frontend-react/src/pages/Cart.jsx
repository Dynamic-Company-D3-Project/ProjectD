import { useState } from 'react'
import NavBar from '../components/NavBar'
import NavbarVertical from '../components/NavbarVertical'
import CartData from '../dummy/CartData.json'
import CartList from '../components/CartList'
import CartTotal from '../components/CartTotal'

function Cart()
{
    const[services,setService]=useState(CartData)
    return(
        <div>
            <NavBar/>
            <div className='row'>
                <div className='col-2'>
                <NavbarVertical/>
                </div>
                <div className='col-10'>
                <h2 className='page-header' style={{fontWeight:"bold", fontSize:30}}>My Cart</h2>
                <div className='row mt-3'>
                    <div className='col-7'>
                       {services.map(service=>{
                            return(
                               <div className='row d-flex justify-content-center mt-3'>
                                 <CartList serviceName={service['serviceName']} serviceDescription={service['serviceDescription']}
                            servicePrice={service['servicePrice']} serviceImage={service['serviceImage']} />
                               </div>
                            )
                        })}
                    </div>
                    <div className="col-5 d-flex justify-content-center">
                    <div className='mt-4'>
                    <CartTotal/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Cart