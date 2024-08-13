import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";

export default function PayNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const { subCategory,id,price,date,time } = location.state || {};

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

const token = sessionStorage.getItem('authToken')
  const platformFee = (price * 0.05).toFixed(2);
  const gst = (price * 0.18).toFixed(2);
  const couponDiscount = 0.00;
  const totalPayable = (parseFloat(price) + parseFloat(platformFee) + parseFloat(gst) - couponDiscount).toFixed(2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SPRING_URL}/booking/book/${id}`, {
        date,
        time
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      console.log(response.data);
      if(response.data){
        toast.success(response.data)
        setTimeout(()=>{
          navigate("/", { replace: true });
        },1000)
        
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error is Booking, Please Try Again!!!")
    }
  }
  const handleCancel=()=>{
    toast.success("Booking Cancelled")
    setTimeout(()=>{window.location.href="/"},500)
  }
  
  return (
    <div className="flex h-screen justify-center items-center my-9">
      <center>
        <div className="shadow-lg w-fit p-9">
          <h1 className="text-2xl">Order Details</h1>
          <br />
          <div>
            <div className="flex justify-between">
              <span>Services Total</span>
              <span>₹{price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹{platformFee}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{gst}</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <span>₹{couponDiscount.toFixed(2)}</span>
            </div>
            <br />
            <hr />
            <br />
            <div className="flex justify-between">
              <span>Total Payable</span>
              <span>₹{totalPayable}</span>
            </div>
          </div>

          <br />
          <hr />
          <br />
          <div className="relative">
            <input
              type="search"
              id="search"
              className="p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Coupon Code"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            
            >
              Apply
            </button>
          </div>
          <br />
          {isPaymentSuccess ? (
            <div className="flex-row-reverse space-x-8">
              <p>Success</p>
            </div>
          ) : (
            <div className="flex-row-reverse space-x-8">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Make Payment
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </center>
    </div>
  );
}
