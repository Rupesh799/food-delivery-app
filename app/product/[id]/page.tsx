// "use server"
import React from 'react';
import Image from 'next/image'
import { singleProduct } from '@/app/constant/data';
import Price from '@/app/components/Price';

const SingleProduct = () => {
    return (
        <div className='p-4 lg:px-40 xl:px-30 h-screen flex flex-col justify-around text-text-text1 md:flex-row md:gap-7 md:items-center xl:w-full xl:gap-6 xl:justify-between'>
            {singleProduct.img && (
                <div className='relative w-full h-1/2 md:h-[70%]'>
                <Image 
                src={singleProduct.img} 
                alt="" 
                className="object-contain" 
                fill/>
             </div>
            )}
         
         <div className='flex flex-col gap-3 md:h-[70%] md:justify-center md:gap-5'>
            <h1 className='font-bold text-3xl'>{singleProduct.title}</h1>
            <p>{singleProduct?.desc}</p>
            <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
         </div>

        
              
        </div>
    );
};

export default SingleProduct;