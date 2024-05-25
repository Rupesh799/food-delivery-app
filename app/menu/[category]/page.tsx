import { ProductType } from '@/app/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const getAllCaterogyProduct = async(category:string)=>{
    const res = await fetch(`http://localhost:3000/api/products?cat=${category}`,{
        cache:"no-store",
    })
    if(!res.ok){
        throw new Error("Error fetching category product")
    }
    return res.json()
}

type Props ={
     params:{category:string}
}

const AllCategoryProducts = async({params}:Props) => {

    const allProducts:ProductType[] = await getAllCaterogyProduct(params.category)
    return (
        <div className='flex flex-wrap text-text-1'>
           {allProducts.map((item)=>(
                    <Link  className="w-full h-[60vh] group border-r-2 border-b-2 border-t-2 md:w-1/2 xl:w-1/3" href={`/product/${item.id}`} key={item.id}>

                        <div className='relative h-[70%]'>
                            {item.image && <Image src={item.image} alt='image' fill className='object-contain'/>}
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

export default AllCategoryProducts;