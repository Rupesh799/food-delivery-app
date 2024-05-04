import React from 'react';
import Image from "next/image"
import CountDown from './CountDown';
const Offers = () => {
    return (
        <div className='bg-black h-screen flex flex-col gap-4 md:flex-row xl:px-5'>
            {/* text */}
            <div className='mt-6 flex-1 flex flex-col justify-center items-center gap-3'>
                <h1 className='text-center text-xl  uppercase text-green-800 xl:text-3xl font-bold'>Delicious and Crispy</h1>
                <p className='text-center p-3 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quo accusamus voluptatibus veniam? Vel magnam, esse eum doloremque et, quod impedit necessitatibus velit ut consequatur quos maxime. Laborum, non ex?</p>
                <CountDown/>
                <button className='px-4 py-3 bg-primary-primary2 rounded font-bold'>Order Now</button>
            </div>
            {/* image */}
            <div className='relative w-full flex-1'>
                    <Image src="/temp/item1.png" alt='image' fill className='object-contain'/>
            </div>
        </div>
    );
};

export default Offers;