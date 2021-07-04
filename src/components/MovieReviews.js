import React, { Component } from "react";

const MovieReviews = ({ reviews }) => {
    if(reviews)
        return (
  <div className="review-list">
    {reviews.map((review) => (
      <div className="review">{review.summary_short}</div>
    ))}
  </div>
);
return (
    <div className="review-list">
        No results found!
    </div>
)
    }

export default MovieReviews;
