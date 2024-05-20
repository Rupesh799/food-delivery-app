"use client"
import React, { useEffect, useState } from 'react'


type ProductProps ={
    price:number;
    id:number;
    options?:{title:string; additionalPrice:number}[]
}
const Price = ({price, id, options}:ProductProps) => {

    const[total, setTotal] = useState(price);
    const [selected, setSelected] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        setTotal(quantity* (options ? price+options[selected].additionalPrice : price));

    },[quantity, selected, price, options])
  return (
    <div>
        <h2 className='font-bold'>Rs. <span className='font-bold'>{total.toFixed()}</span></h2>

        <div className='flex gap-3 mt-4'>
            {options?.map((option, index)=>(
                <button key={option.title} 
                className='min-w-[5rem] rounded px-3 py-1  font-bold hover:bg-green-800 hover:b-0'
                style={{
                    background:selected === index ? 'rgb(44 105 141)': 'transparent',
                    color: selected === index ? 'white': 'rgb(44 105 141)',
                    border:selected === index ? 'none':'1px solid rgb(44 105 141)'
                   
                }}
                onClick={()=>setSelected(index)}
                >
                    {option.title}
                    </button>
            ))}
        </div>

        <div className=' mt-3 flex justify-between items-center gap-5 '>
         <div className='w-full flex justify-between  border p-3 '>
            <span>Quantity</span>
            <div className='flex gap-3 items-center'>
                <button onClick={()=>setQuantity(prev=>(prev>1 ? prev-1 : 1))}>{'<'}</button>
                <span>{quantity}</span>
                <button onClick={()=>setQuantity(prev=>(prev<10 ? prev+1 : 10))}>{'>'}</button>

            </div>
         </div>
         <button className='font-bold px-3 py-3 w-56 bg-primary-primary2 rounded-md'>Add to Cart</button>
         </div>
    </div>
  )
}

export default Price