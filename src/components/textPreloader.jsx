import React from 'react';
import Waveup from './waveup.jsx';
import Wavedown from './wavedown.jsx';

const TextPreloader = () => {
    const textStyle = "text-7xl md:text-[92px] font-bold text-[#53c87b]";

    return (
        <>
            <Waveup />
            <div className="fixed top-1/4 left-1/2 right-1/2  flex items-center justify-center h-vh bg-black">

                <div className="text-center space-y-4">
                    <div data-aos="fade-up">
                        <div className={textStyle}>Saheds</div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <div className={textStyle}>Code</div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="800">
                        <div className={textStyle}>Crafts</div>
                    </div>
                </div>
            </div>
            <Wavedown />
        </>
    );
};

export default TextPreloader;