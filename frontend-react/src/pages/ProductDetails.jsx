import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReviewCard from "../components/ReviewCard";
import { useState,useEffect } from "react";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { ToastContainer, toast } from 'react-toastify';
import NavBarUser from "../components/NavBarUser";
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetails() {
  let [subCategory, setSubCategory] = useState([])
  const {id} = useParams();

  useEffect(() => {
    loadSubCategories();
  },[id]);

  async function loadSubCategories() {
    try{
    let subCategoryDetails = await axios.get(`${SPRING_URL}/subCategory/subCategoryById/${id}`)
    console.log(subCategoryDetails.data);
    setSubCategory(subCategoryDetails.data)
    }catch (error) {
      console.error("Failed to load subcategory", error);
      toast.error("Error fetching the data")
    }
  }
  const getRatingStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating"
          className={`mask mask-star-2 ${i <= rating ? "bg-orange-400" : "bg-gray-300"}`}
          readOnly
        />
      );
    }
    return stars;
  }
  const token = sessionStorage.getItem('authToken');
  return (
    <div className="page-container">
      {token ? <NavBarUser /> : <NavBar />}
      <div className="content-container container mt-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-col">
            <img
              class="w-60 h-60 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/assets/SubCategory.jpg"
            />
            <h1 className="categoryHeading pl-1">{subCategory.categoryName}</h1>
          </div>
          <div>
            <div class="container d-flex flex-col text-center justify-content-center align-items-center">
              {/* <div class="time text-6xl mb-4">25:30</div>{" "} */}
              <div className="price text-6xl mb-4">₹{subCategory.price}</div>
              {/* <div class="rating d-flex justify-content-center">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div> */}
               <div className="rating d-flex justify-content-center">
                {subCategory.rating ? getRatingStars(subCategory.rating) : null}
              </div>
              <div className="d-flex flex-col m-2">
                <Link to={`/payment/${id}`}>
                  <button
                    class="w-40 m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Book
                  </button>
                </Link>

                <button
                  class=" 2-40 m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br></br>
        <div className="indent-0 text-wrap text-balance text-pretty">
          <h2>
            {subCategory.description}
          </h2>
        </div>
        <br />

        <div id="reviews">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}
