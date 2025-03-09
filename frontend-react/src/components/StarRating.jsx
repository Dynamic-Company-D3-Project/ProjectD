

import React from 'react';
import PropTypes from 'prop-types';


const StarRating = ({ rating }) => {
  const starCount = 5; 
  const filledStars = Math.floor(rating); 
  const halfStar = rating % 1 !== 0; // Half-star condition

  return (
    <div className="star-rating">
      {[...Array(starCount)].map((_, index) => {
        if (index < filledStars) {
          return <span key={index} className="star filled">&#9733;</span>; // Full star
        }
        if (index === filledStars && halfStar) {
          return <span key={index} className="star half">&#9733;</span>; // Half star
        }
        return <span key={index} className="star">&#9734;</span>; // Empty star
      })}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
