import React from 'react';
import { menu } from '../constant/data';
import Link from 'next/link';

const Menu = () => {
    return (
        <div className=' h-full p-5 lg:px-20 xl:px-40  flex flex-col md:flex-row lg:flex-row  '>
            {menu.map((category)=>(
                <Link 
                href={`/menu/${category.slug}`} 
                key={category.id} 
                className='w-full bg-cover p-8   '
                style={{backgroundImage:`url(${category.img})`,
                
            }}
                >
                        <div className={`text-${category.color} w-1/2 xl:h-full`}>
                            <h1 className='font-bold text-3xl uppercase'>{category.title}</h1>
                            <p className='text-sm py-8 text-primary-primary1'>{category.desc}</p>
                            <button className={`px-3 py-2 bg-${category.color} rounded hidden  xl:block`}>Explore</button>
                        </div>

                </Link>
                
            ))}
        </div>
    );
};

export default Menu;