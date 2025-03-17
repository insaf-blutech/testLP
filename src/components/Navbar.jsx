
import React, { } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

// Navbar Component
const Navbar = () => {
    return (
        <nav className="text-white mt-4 md:mt-10 flex py-[2.5vw] md:py-[1.5vw] px-[5vw] md:px-[3vw] justify-between bg-[#0000001A] backdrop-blur-[10px] w-full">
            <h1 className="text-4xl md:text-6xl">LOGO</h1>
            <ul className="flex gap-x-[1vw] md:gap-x-[2.5vw] items-center">
                <li className="font-bold cursor-pointer text-[2.5vw] md:text-[1vw]">Home</li>
                <li className="cursor-pointer text-[2.5vw] md:text-[1vw]">About Us</li>
                <li className="cursor-pointer text-[2.5vw] md:text-[1vw]">Owners</li>
                <li className="cursor-pointer text-[2.5vw] md:text-[1vw]">Tenants</li>
                <li className="cursor-pointer text-[2.5vw] md:text-[1vw]">Properties</li>
            </ul>
            <button className="bg-button px-[3.75vw] md:px-[1.5vw] py-[2vw] md:py-[1vw] rounded-lg text-[2.5vw] md:text-[1vw]">Start Treatment</button>
        </nav>
    );
};
export default Navbar