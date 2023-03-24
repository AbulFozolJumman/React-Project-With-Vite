import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid aqua', margin:'10px', padding:'10px'}}>
            <h2>This is my Knob Count!</h2>
            <h3>Count: {props.steps}</h3>
        </div>
    );
};

export default Knob;