import React from 'react';
import { useParams } from 'react-router-dom';


const Checkout = () => {
    const {checkId} = useParams();
    return (
        <div>
            <h2>Please checkout ID:{checkId}</h2>
        </div>
    );
};

export default Checkout;