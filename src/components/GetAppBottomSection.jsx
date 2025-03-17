import React from 'react';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';

const GetAppBottomSection = () => {
    return (
        <div className="flex flex-col gap-4 my-auto h-full justify-center items-center text-center">
            <p className="max-w-[60%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum consequatur odit fuga deserunt possimus ducimus perspiciatis tempore, neque alias reiciendis.
            </p>
            <Button title='Get The App' className='flex gap-x-2 text-white bg-black font-bold font-grotesk p-[17px 15px]' Icon={ArrowUpRight} />
        </div>
    );
};

export default GetAppBottomSection;