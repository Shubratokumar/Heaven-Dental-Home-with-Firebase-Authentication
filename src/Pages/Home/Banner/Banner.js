import React from 'react';
import "./Banner.css";
import operationTheater from "../../../Assets/Images/operation theater.jpg"

const Banner = () => {
    return (
        <div className="home">
            <div className='container py-5'>
                <div className="row align-items-center justify-content-center g-4 mx-2">
                    <div className="col-12 col-lg-6 align-self-center">
                        <p className='sub-title'>Your <span className='oranged'>trusted</span> dentist</p>
                        <h2 className='title'>
                            Welcome to 
                            <p className='text-uppercase'>Heaven <span className='oranged'>Dental</span> home</p>
                        </h2>
                        <p className='sub-title'>treat your <span className='oranged'>smile,</span> treat your <span className='oranged'>soul.</span></p>
                    </div>
                    <div className="col-12 col-lg-6 align-self-center shadow p-3 mb-3 bg-body rounded">
                        <img className='img-fluid' src={operationTheater} alt="" />
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default Banner;