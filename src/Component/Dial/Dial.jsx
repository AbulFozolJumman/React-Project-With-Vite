import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid blue', margin:'15px', padding:'15px'}}>
            <h2>This is my Dial Count!</h2>
            <h3>Count: {props.steps}</h3>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;