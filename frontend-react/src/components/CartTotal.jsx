function CartTotal()
{
    return(
        <div className="card shadow-xl" style={{height:600, width:350, borderRadius:20}}>
        <h5 className='card-header text-center'style={{fontSize :24,backgroundColor:"orange",borderTopLeftRadius:20,borderTopRightRadius:20}}>Order Details</h5>
        <div className="card-body">
            <div className="row mt-2">
             <div className="col-6 d-flex justify-content-start  card-text"><p>Service Total</p></div>
             <div className="col-6 d-flex justify-content-end card-text">{'₹4500'}</div>
            </div>
            <div className="row mt-2">
             <div className="col-6 d-flex justify-content-start card-text"><p>Platform Fee</p></div>
             <div className="col-6 d-flex justify-content-end card-text">{'₹500'}</div>
            </div>
            <div className="row mt-2">
             <div className="col-6 d-flex justify-content-start card-text"><p>GST</p></div>
             <div className="col-6 d-flex justify-content-end  card-text">{'₹250'}</div>
            </div>
            <div className="row mt-2">
             <div className="col-6 d-flex justify-content-start  card-text"><p>Coupon Discount</p></div>
             <div className="col-6 d-flex justify-content-end  card-text">{'₹500'}</div>
            </div>
            <div className="row mt-2">
            <hr />
            </div>
            <div className="row mt-2">
             <div className="col-6 d-flex justify-content-start card-text" style={{fontWeight:'bold'}}>Total Payable</div>
             <div className="col-6 d-flex justify-content-end card-text">{'₹4750'}</div>
            </div>
            <div className="row mt-4">
            <hr />
            </div>
            <div className="row mt-2 d-flex justify-content-center">
            <div class="input-group mb-3">
             <input type="text" class="form-control" placeholder="Enter Coupon Code" />
             <button class="btn btn-primary" type="button" id="button-addon2">Apply</button>
            </div>
            </div>
            <div className="row mt-2 d-flex justify-content-center">
            <button className="btn btn-success" style={{height:50, width:150,borderRadius:10}}>Checkout</button>
            </div>
        </div>
        </div>
    )
}
export default CartTotal