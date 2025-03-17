import React from 'react';
import LogoSlider from './LogoSlider';
import CBS from "../assets/images/CBS.png"
import ABC from "../assets/images/ABC.png"
import FOX from "../assets/images/FOX.png"
import NBC from "../assets/images/NBC.png"

const logos = [CBS, ABC, FOX, NBC]
const PartnersSection = () => {
    return (
        <div className="flex flex-col items-center gap-y-5 justify-center md:flex-row">
            <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                <p className="text-xl md:text-2xl font-medium text-button uppercase">As Seen</p>
                <h1 className='text-3xl md:text-[52px] font-medium'>Featured On</h1>
            </div>
            <LogoSlider logos={logos} />
        </div>
    );
};

export default PartnersSection;
