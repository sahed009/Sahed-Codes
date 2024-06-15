import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="z-50 fixed top-0 left-0 w-10 h-10 border-[2px] border-[#53c87b] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 duration-200 ease-linear"
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
        />
    );
};

export default Cursor;
