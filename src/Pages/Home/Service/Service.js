import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate} from 'react-router-dom';

const Service = ({ service }) => {
  const { title, image, description, price, id } = service;
  const navigate = useNavigate();
  const handleCheckOut = () =>{
      navigate(`/checkout/${id}`)
  }
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={image} className="img-fluid" alt="." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">Starts with : $ {price}</p>
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
          <div className="card-footer">
            <button onClick={handleCheckOut} className="btn btn-outline-primary w-100">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
