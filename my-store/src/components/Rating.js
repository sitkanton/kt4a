import React from "react";
import "../styles/Rating.css";

const Rating = ({ rating }) => {
  const fullStars = Math.round(rating);
  
  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`fa fa-star ${index < fullStars ? "active" : ""}`}></span>
      ))}
    </div>
  );
};

export default Rating;
