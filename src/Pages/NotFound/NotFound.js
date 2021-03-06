import React from 'react';
import Error from '../../../src/Assets/Images/404Error.jpg';

const NotFound = () => {
    return (
        <div className='bg-warning'>
            <div className="container">
                <div className="row g-4 align-items-center justify-content-center">
                    <div className="col-sm-12 col-lg-6">
                        <h2 className='text-white text-center'>404, Page  not found!!!</h2>
                    </div>
                    <div className="col-sm-12 col-lg-6 shadow p-3 mb-3 bg-body rounded">
                        <img className='img-fluid' src={Error} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;