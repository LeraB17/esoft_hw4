import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);
        if (count === 0) {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [count])

    return (
        <div className='countdown__timer'>
            <div className='wrapper'>
                <div>
                    {count}
                </div>
                <button
                    className='restart__button'
                    onClick={() => setCount(10)}
                >
                    Restart
                </button>
            </div>
        </div>
    );
};

export default CountdownTimer;