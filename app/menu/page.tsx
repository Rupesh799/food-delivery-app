import React from 'react';
import { menu } from '../constant/data';
import Link from 'next/link';

const Menu = () => {
    return (
        <div className=' h-full p-5 lg:px-20 xl:px-40    flex flex-col md:flex-row lg:flex-row  '>
            {menu.map((category)=>(
                <Link 
                href={category.slug} 
                key={category.id} 
                className='w-full h-1/3 bg-cover p-8 flex justify-center items-center  '
                style={{backgroundImage:`url(${category.img})`,
                
            }}
                >
                        <div className={`text-${category.color} `}>
                            <h1 className='font-bold text-3xl uppercase'>{category.title}</h1>
                            <p className='text-left'>{category.desc}</p>
                            <button className='px-3 py-2 bg-primary-primary2 rounded hidden  xl:block'>Explore</button>
                        </div>

                </Link>
                
            ))}
        </div>
    );
};

export default Menu;