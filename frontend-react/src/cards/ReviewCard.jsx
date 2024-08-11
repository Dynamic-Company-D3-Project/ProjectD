import React from "react";

const ReviewCard = ({ customer, title, review, category, rating, date }) => {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    marginBottom: "20px",
    marginRight: "10px",
    textAlign: "left",
    width: "325px",
    maxWidth: "800px",
  };

  const titleStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "green",
  };

  const customerStyle = {
    fontSize: "1.2em",
    fontWeight: "bold",
    color: "#333",
  };

  const categoryStyle = {
    fontSize: "1em",
    color: "#999",
    marginBottom: "10px",
  };

  const reviewStyle = {
    fontSize: "1em",
    color: "#666",
    marginBottom: "10px",
  };

  const ratingStyle = {
    color: "#FFD700",
    marginBottom: "10px",
  };

  const dateStyle = {
    fontSize: "0.8em",
    color: "#aaa",
  };

  return (
    <div style={cardStyle}>
      <div style={customerStyle}>{customer}</div>
      <div style={titleStyle}>{title}</div>
      <div style={categoryStyle}>{category}</div>
      <div style={reviewStyle}>{review}</div>
      <div style={ratingStyle}>{rating}</div>
      <div style={dateStyle}>{date}</div>
    </div>
  );
};

export default ReviewCard;
