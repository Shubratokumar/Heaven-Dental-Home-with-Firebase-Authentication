import React from 'react';

const Service = ({service}) => {
    const {title} = service;
    return (
        <div>
            <h2>This is servise.{title}</h2>
        </div>
    );
};

export default Service;