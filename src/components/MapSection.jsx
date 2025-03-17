import React from 'react';
import torontoImg from "../assets/images/torontoImg.png"
import MapSvg from './MapSvg';
const MapSection = () => {
    return (
        <div className="p-4">
            <div className="text-center space-y-6 mb-16">
                <p className="text-[#49C7AB] text-2xl uppercase">States We</p>
                <p className="text-[#1E293B] text-4xl md:text-5xl lg:text-[52px] font-medium">Currently Serve</p>
                <p className="text-[#475569] text-lg md:text-xl font-grotesk">
                    We believe everyone should have access to treatment and care. That’s why we’re teaming up with providers all over the country. Click on a green state to see the insurance companies we currently accept and to learn more about online Suboxone doctors in your area.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:max-w-[498px]">
                    <div className="relative w-full lg:max-w-[498px] lg:max-h-[616px]">
                        <div className="absolute p-5 w-full h-full">
                            <div className="w-full h-full border border-white"></div>
                        </div>
                        <img src={torontoImg} alt="sky-scrapers" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold mt-6 mb-2">Toronto</p>
                    <p className="text-lg md:text-xl font-medium text-[#49C7AB]">Ottawa St. and Homer Waston Blvd.</p>
                </div>
                <div className="flex-1 min-w-[50%]">
                    <div className="w-full h-auto"></div>
                    <MapSvg className="w-full h-auto" />
                </div>
            </div>
        </div>
        // </div>
    );
};

export default MapSection;