import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const handleWindowResize = () => {
            setShowCursor(window.innerWidth >= 1024);
        };

        handleWindowResize(); 

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    if (!showCursor) return null;

    
    const cursorSize = 20; 

    return (
        <div
            className="z-50 fixed top-0 left-0 w-10 h-10 border-[2px] border-[#53c87b] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 duration-75 ease-linear"
            style={{ width: `${cursorSize}px`, height: `${cursorSize}px`, top: `${position.y}px`, left: `${position.x}px` }}
        />
    );
};

export default Cursor;
