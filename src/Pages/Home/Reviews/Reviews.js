import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
    const [ reviews, setReviews ] = useState([]);
    useEffect(() =>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
  return (
    <div className="reviews">
      <div className="container p-3">
        <h1 className="services-title text-center my-5">
          Kind<span className="oranged"> words </span>
          from our <span className="oranged"> patients.</span>
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
              reviews.map(review => <Review review={review} key={review.id}></Review>)
          }
        </div>
      </div>
    </div>
  );
};

export default Reviews;
