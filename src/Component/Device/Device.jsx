import React from 'react';
import Details from '../DeviceDetails/Details';

const Device = (props) => {
    return (
        <div>
            <h2>My Device Name: {props.name}</h2>
            <Details price={props.price}></Details>
        </div>
    );
};

export default Device;