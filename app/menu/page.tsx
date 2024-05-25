import React from 'react';
import Link from 'next/link';
import { MenuType } from '../types/types';

const getCategory = async()=>{
    const res = await fetch("http://localhost:3000/api/categories",{
        cache:"no-store"
    });

    if(!res.ok){
        throw new Error("Failed to fetch categories")
    }

    return res.json()
} 

const Menu = async() => {
    const menu:MenuType = await getCategory()
    return (
        <div className=' h-full p-5 lg:px-20 xl:px-40  flex flex-col md:flex-row lg:flex-row  '>
            {menu.map((category)=>(
                <Link 
                href={`/menu/${category.slug}`} 
                key={category.id} 
                className='w-full bg-cover p-8'
                style={{backgroundImage:`url(${category?.image})`,
                
            }}
                >
                        <div className={`text-${category.color} w-1/2 xl:h-full`}>
                            <h1 className='font-bold text-3xl uppercase'>{category.title}</h1>
                            <p className='text-sm py-8 text-primary-primary1'>{category.description}</p>
                            <button className={`px-3 py-2 bg-${category.color} rounded hidden  xl:block`}>Explore</button>
                        </div>

                </Link>
                
            ))}
        </div>
    );
};

export default Menu;