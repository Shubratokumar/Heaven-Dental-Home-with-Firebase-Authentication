import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services] = useServices([]);
    return (
        <div className='services'>
            <div className="container p-3">
                <h1 className='services-title text-center my-5'>
                    Comprehensive<span className="oranged"> Care, </span>  
                    One <span className="oranged"> Location.</span>
                </h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services?.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;