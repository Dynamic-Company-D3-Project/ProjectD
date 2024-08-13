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

  useEffect(() => {
    loadSubCategories();
  }, []);

  async function loadSubCategories() {
    try {
      let subCategoryDetails = await axios.get(`${SPRING_URL}/subCategory/subCategoryById/${id}`);
      setSubCategory(subCategoryDetails.data);
    } catch (error) {
      toast.error("Error fetching the data");
    }
  }

  const onPayment = () => {
    navigate("/paynow");
  };

  return (
    <div className="flex h-screen justify-center items-center my-9">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 border border-gray-300">
        <form>
        <h1 className="text-2xl font-bold mb-6 text-center">Select Service Schedule</h1>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Booking Date</td>
              <td className="py-2 px-4">
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="date"
                  name="date"
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
