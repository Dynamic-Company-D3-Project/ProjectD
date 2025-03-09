import React, { useEffect, useState } from "react";
import ReviewCard from "../cards/ReviewCard";
import NavBar from "../components/NavBar";
import NavBarUser from "../components/NavBarUser";
import Footer from "../components/Footer";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";
import StarRating from "../components/StarRating"; // Import the StarRating component

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const token = sessionStorage.getItem('authToken')
  useEffect(() => {
    loadReviews();
  }, []); // Added empty dependency array to avoid infinite loop

  async function loadReviews() {
    try {
      const reviewResponse = await axios.get(`${SPRING_URL}/reviews/getAll`);
      setReviews(reviewResponse.data);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
      toast.error("Error fetching the reviews");
    }
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "2.5em",
    marginBottom: "20px",
  };

  const reviewContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
    maxWidth: "1350px",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div className="container-page">
      {token ? 
      <NavBarUser /> :
      <NavBar />
}
      <div className="content-container">
        <div style={containerStyle} className="user-reviews">
          <div style={headerStyle} className="text-center text-black fw-bold">
            <h1>Customer Reviews</h1>
          </div>
          <div style={reviewContainerStyle}>
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                customer={review.user.firstName + " " +review.user.lastName}
                review={review.reivew}
                category={review.categoryEntity.categoryName}
                rating={<StarRating rating={review.rating} />}
                date={review.reviewDate}
              />
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <button className="join-item btn btn-outline w-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
              Previous page
            </button>
            <button className="join-item btn btn-outline w-40">
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
