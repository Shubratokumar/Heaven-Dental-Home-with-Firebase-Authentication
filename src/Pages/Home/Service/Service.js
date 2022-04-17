import React from 'react';

const Service = ({service}) => {
    const {title, image, description} = service;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button className='btn btn-primary'>Book Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;