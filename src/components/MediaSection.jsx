import React from 'react';
import BgImage from "../assets/images/ClearBgVideo.png";
import PlayButtonImg from "../assets/images/PlayButton.png";
const MediaSection = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="w-full md:w-1/2 max-w-full md:max-w-[45%]">
                    <h2 className="text-green-500 text-sm font-[500]">WELCOME TO RECOVERY DELIVERED</h2>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4 sm:mt-6">Your Fully Online Suboxone Treatment Platform</h1>
                    <p className="text-[#475569] font-normal text-base sm:text-lg md:text-xl mt-4 sm:mt-6">100% online opioid treatment with licensed buprenorphine providers starts at just $99/month.</p>
                    <p className="text-[#475569] font-normal text-base sm:text-lg md:text-xl mt-4 sm:mt-6">With monthly and weekly meetings based on where you are in your recovery. Get a same-day appointment and script.</p>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 max-w-full md:max-w-[700px]">
                    <div className="relative bg- rounded-2xl overflow-hidden">
                        <img src={BgImage} alt="Recovery" className="w-full brightness-[.65] h-auto rounded-lg shadow-lg" />
                        <button className="absolute inset-0 flex items-center justify-center">
                            <PlayButton />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaSection;

const PlayButton = () => {
    return (
        <div className="relative flex items-center justify-center w-20 h-20">
            {/* Outer circle with gradient */}
            <div className="absolute inset-0 rounded-full bg-teal-100 opacity-50"></div>

            {/* Middle circle with gradient */}
            <div className="absolute inset-2 rounded-full bg-teal-200 opacity-70"></div>

            {/* Inner circle - solid color */}
            <div className="absolute inset-4 rounded-full bg-teal-500 flex items-center justify-center">
                {/* Play triangle icon */}
                <img src={PlayButtonImg} alt="" className='w-30 3-10' srcset="" />
            </div>
        </div>
    );
};
