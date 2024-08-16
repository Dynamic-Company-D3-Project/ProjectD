import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";

export default function Payment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [subcategory, setSubCategory] = useState({
    date:"",
    time:"",
    price:"",
    categoryName:"",
  });

  const [minTime, setMinTime] = useState("");

  useEffect(() => {
    loadSubCategories();
    setMinTimeForToday();
  }, []);

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  };

  const setMinTimeForToday = () => {
    const todayDate = getTodayDate();
    const selectedDate = subcategory.date;

    if (selectedDate === todayDate) {
      setMinTime(getCurrentTime());
    } else {
      setMinTime("00:00");
    }
  };
  async function loadSubCategories() {
    try {
      let subCategoryDetails = await axios.get(`${SPRING_URL}/subCategory/subCategoryById/${id}`);
      setSubCategory(subCategoryDetails.data);
    } catch (error) {
      toast.error("Error fetching the data");
    }
  }
  const handleChange =(e)=>{
    const { name, value } = e.target;
    setSubCategory((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "date") {
      setMinTimeForToday();
    }
  };

  const onPayment = (e) => {
    e.preventDefault();
    if (!subcategory.date) {
      toast.error("Please select a date");
      return;
    }

    if (!subcategory.time) {
      toast.error("Please select a time");
      return;
    }
      navigate("/paynow",{state:{...subcategory,id:id,price:subcategory.price,date:subcategory.date,time:subcategory.time}, replace:true});
  };
  

  return (
    <div className="flex h-screen justify-center items-center my-9">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 border border-gray-300">
      <h1 className="text-2xl font-bold mb-6 text-center">Select Service Schedule</h1>
        <form>
        
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Booking Date</td>
              <td className="py-2 px-4">
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="date"
                  name="date"
                  onChange={handleChange}
                  min={getTodayDate()}
                  required="required"
                  value={subcategory.date}
                />
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Booking Time</td>
              <td className="py-2 px-4">
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="time"
                  name="time"
                  min={minTime}
                  required="required"
                  onChange={handleChange}
                  value={subcategory.time}
                />
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Price</td>
              <td className="py-2 px-4">
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={subcategory.price || ""}
                  name="price"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">Service Details</td>
              <td className="py-2 px-4">
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  readOnly
                  value={subcategory.categoryName || ""}
                  name="categoryName"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between mt-6">
          <button
            onClick={onPayment}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            type="submit"
          >
            Make Payment
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="button"
          >
            Add To Cart
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
