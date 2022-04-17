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
      <div className="col shadow p-2 mb-3 bg-body rounded">
        <div className="card h-100">
          <img src={image} className="img-fluid" alt="." />
          <div className="card-body">
            <h5 className="card-title fs-3">{title}</h5>
            <hr />
            <p className="card-text fs-5 fst-italic justified">{description}</p>
            <p className="card-text"><span className="oranged">Starts with</span> : $ {price}</p>
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
