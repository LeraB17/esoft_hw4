import React, { useEffect, useState } from 'react';
import './WindowSize.css';

const WindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handlerResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handlerResize);
        return () => {
            window.removeEventListener('resize', handlerResize);
        }
    }, [])

    return (
        <div className='window__size'>
            <div>
                <div>Ширина экрана: {windowSize.width}</div>
                <div>Высота экрана: {windowSize.height}</div>
            </div>
        </div>
    );
};

export default WindowSize;