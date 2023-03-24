import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const stepsCount = () => {
        const newCount = steps + 1;
        setSteps(newCount);
    }

    return (
        <div>
            <h2>This is my Smart Watch!</h2>
            <h3>Count: {steps}</h3>
            <button onClick={stepsCount} style={{backgroundColor: 'lightgreen', color:'blue', fontWeight:'bold'}}>
                Ready Steady Go
            </button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;