import React, {useState, useEffect} from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services)
    return (
        <div className='services'>
            <div className="container p-3">
                <h1 className='services-title text-center'>
                    Comprehensive<span className="oranged"> Care, </span>  
                    One <span className="oranged"> Location.</span>
                </h1>
                <h2 className="title">Total services available right now:{services.length}</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;