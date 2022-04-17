import React from 'react';
import { AiFillStar } from "react-icons/ai";
import './Review.css';

const Review = ({review}) => {
    const {title, image, description,} = review
    return (
        <div>
            <div className="col shadow p-2 mb-3 bg-body rounded-3">
              <div className="card h-100">
                <img src={image} className="img-fluid" alt="." />
                <div className="card-body">
                  <hr />
                  <p className="card-text fs-5 fst-italic justified">{description}</p>
                  <hr />
                  <h5 className="card-title text-end">- {title}</h5>
                  <div>
                    <p className="oranged">
                      Rating :
                      <span className="ps-2 text-warning">
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Review;