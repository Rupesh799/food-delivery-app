"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";

const sliderData=[
    {
        id:1,
        title:"Hello , Deliver with us and get exciting offers ",
        image:"/temp/slider.jpg"
    },
    {
        id:2,
        title:"We deliver the best MOMO in Kathmandu",
        image:"/temp/slideer2.jpg"
    },
    {
        id:1,
        title:"Want a fresh food ? So, we are here",
        image:"/temp/slider3.jpg"
    },

]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
        const interval = setInterval(
            ()=> setCurrentSlide((prev)=> (prev === sliderData.length -1? 0 : prev+1))
        ,2000);
        return ()=> clearInterval(interval)
    },[])
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-4rem)] lg:flex-row md:flex-row">
            {/*text*/}
           <div className="flex-1 font-bold text-2xl p-6 flex flex-col gap-8 items-center justify-center ">
               <h1 className="text-center text-2xl uppercase md:text-3xl">{sliderData[currentSlide].title}</h1>
               <button className="px-4 py-3 bg-primary-primary2 rounded ">Order Now</button>
           </div>
            {/*image*/}
            <div className='w-full flex-1 relative l'>
               <Image src={sliderData[currentSlide].image} alt='' fill className="object-cover rounded"/>
            </div>
        </div>
    );
};

export default Slider;