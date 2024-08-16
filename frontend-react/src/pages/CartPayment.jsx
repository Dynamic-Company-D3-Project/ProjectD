import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";

export default function CartPayment() {
  const location = useLocation();
  const { price } = location.state || {}; // Fallback in case state is undefined
  const [addressType, setAddressType] = useState("HOME");
  const [subcategory, setSubCategory] = useState({
    date: "",
    time: "",
    price: "",
    categoryName: "",
  });

  const [minTime, setMinTime] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setMinTimeForToday();
  }, []);

  const token = sessionStorage.getItem("authToken");

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubCategory((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "date") {
      setMinTimeForToday();
    }
  };

  const onPayment = async (e) => {
    e.preventDefault();
    console.log("AddressType" + addressType);
    if (!subcategory.date) {
      toast.error("Please select a date");
      return;
    }

    if (!subcategory.time) {
      toast.error("Please select a time");
      return;
    }

    axios
      .put(
        `${SPRING_URL}/cart/`,
        {
          date: subcategory.date,
          time: subcategory.time,
          addressType,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        toast.success(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error in Booking, Please Try Again!!!");
      })
      .finally(() => {
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      });
  };

  return (
    <div className="flex h-screen justify-center items-center my-9">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 border border-gray-300">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Select Service Schedule
        </h1>
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
                <td className="py-2 px-4 font-semibold">Total Price</td>
                <td className="py-2 px-4">
                  <input
                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={price || ""}
                    name="price"
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="relative" style={{ width: "100px" }}>
            <select
              className="form-select"
              name="addressType"
              onChange={(e) => setAddressType(e.target.value)}
            >
              {/* <option value="" disabled selected hidden>
                Address Type
              </option> */}
              <option selected>HOME</option>

              <option>OFFICE</option>
              <option>OTHERS</option>
            </select>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={onPayment}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              type="submit"
            >
              Make Payment
            </button>
            <Link
              to={"/cart"}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="button"
            >
              Back To Cart
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
