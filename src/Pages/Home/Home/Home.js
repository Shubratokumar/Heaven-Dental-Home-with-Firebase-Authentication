import React from 'react';
import "./Home.css";
import operationTheater from "../../../Assets/Images/operation theater.jpg"

const Home = () => {
    return (
        <div className="home">
            <div className='container py-5'>
                <div className="row align-items-center justify-content-center g-4">
                    <div className="col-12 col-lg-6 align-self-center">
                        <p className='sub-title'>Your <span className='oranged'>trusted</span> dentist</p>
                        <h2 className='title'>
                            Welcome to 
                            <p className='text-uppercase'>Haven <span className='oranged'>Dental</span> home</p>
                        </h2>
                        <p className='sub-title'>treat your <span className='oranged'>smile,</span> treat your <span className='oranged'>soul.</span></p>
                    </div>
                    <div className="col-12 col-lg-6 align-self-center shadow p-3 mb-5 bg-body rounded">
                        <img className='img-fluid' src={operationTheater} alt="" />
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default Home;