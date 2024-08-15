import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReviewCard from "../components/ReviewCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";
import NavBarUser from "../components/NavBarUser";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetails() {
  const [subCategory, setSubCategory] = useState({});
  const [subCategoryReview, setSubCategoryReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadSubCategories();
    loadSubCategoryReviews();
  }, [id]);

  async function loadSubCategories() {
    try {
      const response = await axios.get(`${SPRING_URL}/subCategory/subCategoryById/${id}`);
      setSubCategory(response.data);
    } catch (error) {
      console.error("Failed to load subcategory", error);
      toast.error("Error fetching the data");
    }
  }

  async function loadSubCategoryReviews() {
    try {
      const response = await axios.get(`${SPRING_URL}/reviews/${id}`);
      setSubCategoryReview(response.data);
    } catch (error) {
      console.error("Failed to load subcategory reviews", error);
      toast.error("Error fetching the reviews");
    }
  }

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 fill-current ${i < rating ? "text-yellow-500" : "text-gray-400"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ));
  };

  const token = sessionStorage.getItem("authToken");

  return (
    <div className="page-container bg-gray-100 min-h-screen">
      {token ? <NavBarUser /> : <NavBar />}
      <div className="content-container container mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start">
            <img
              className="w-60 h-60 p-1 rounded-full ring-2 ring-gray-300"
              src={subCategory.image}
              alt={subCategory.categoryName}
            />
            <h1 className="text-2xl font-semibold mt-2">{subCategory.categoryName}</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold mb-4">₹{subCategory.price}</div>
            <div className="flex items-center mb-4">
              {subCategory.rating ? getRatingStars(subCategory.rating) : getRatingStars(0)}
            </div>
            <div className="flex flex-col items-center">
              {token ? (
                <Link to={`/payment/${id}`}>
                  <button className="w-40 m-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Book
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="w-40 m-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Book
                  </button>
                </Link>
              )}
              <button className="w-40 m-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-lg text-gray-700 mb-6">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p>
            {subCategory.description || "This is a detailed description of the product or service. It includes key features, benefits, and any unique selling points that make this product stand out. For example, it might describe the quality, materials used, and the craftsmanship involved. It could also highlight customer satisfaction, any awards or certifications, and other relevant details that would help potential customers make an informed decision."}
          </p>
          <p className="mt-4">
            Our product is designed with the highest quality standards and provides exceptional value for your money. Whether you’re looking for durability, functionality, or style, this product meets all your needs with its innovative design and top-notch performance. Explore more about the benefits and unique features that set our product apart from the competition.
          </p>
          <br />
          <hr />
        </div>
        <div id="reviews" className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-info" style={{fontSize:"1.7rem"}}>Reviews</h2>
        {subCategoryReview.length > 0 ? (
            subCategoryReview.map((review) => (
              <ReviewCard key={review.reviewId} review={review} />
            ))
          ) : (
            <p className="text-gray-500">No reviews available.</p>
          )}
        </div>
      </div>
      <Footer className="mt-6" />
    </div>
  );
}
