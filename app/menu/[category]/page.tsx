import { burgers } from '@/app/constant/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Category = () => {
    return (
        <div className='flex flex-wrap text-text-1'>
           {burgers.map((item)=>(
                    <Link  className="w-full h-[60vh] group border-r-2 border-b-2 border-t-2 md:w-1/2 xl:w-1/3" href={`/product/${item.id}`} key={item.id}>

                        <div className='relative h-[70%]'>
                            {item.img && <Image src={item.img} alt='image' fill className='object-contain'/>}
                        </div>

                        <div className='flex justify-between items-center h-[30%] p-8 mx-5 font-bold'>
                                <h1 className='text-yellow-500'>{item.title}</h1>
                                <h1 className='group-hover:hidden text-green-600'>RS {item.price}</h1>
                                <button className='px-2 py-2 rounded bg-primary-primary2 hidden group-hover:block '>Add to Cart</button>
                        </div>
                    </Link>
           ))}
        </div>
    );
};

export default Category;