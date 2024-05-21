import React from 'react';
import Image from 'next/image'
import { FaTrash } from 'react-icons/fa';


const CartPage = () => {
    return (
        <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] flex flex-col  lg:flex-row xl:flex-row">
            {/* items constainer */}
            <div className=' p-4 flex flex-col justify-center overflow-scroll lg:overflow-auto md:overflow-auto lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
                {/* single item */}
                <div className='flex justify-between items-center font-bold mb-4 '>
                    <Image src="/temp/item1.png" alt='' height={100} width={100}/>

                    <div>
                        <h1 className='text-2xl'>Burger</h1>
                        <span>Large</span>
                    </div>
                        <h2>RS. 345</h2>
                        <span className='cursor-pointer'>
                            <FaTrash size={20} color='red'/>
                        </span>
                </div>
                <div className='flex justify-between items-center font-bold mb-4 '>
                    <Image src="/temp/item1.png" alt='' height={100} width={100}/>

                    <div>
                        <h1 className='text-2xl'>Burger</h1>
                        <span>Large</span>
                    </div>
                        <h2>RS. 345</h2>
                        <span className='cursor-pointer'>
                            <FaTrash size={20} color='red'/>
                        </span>
                </div>
                <div className='flex justify-between items-center font-bold mb-4 '>
                    <Image src="/temp/item1.png" alt='' height={100} width={100}/>

                    <div>
                        <h1 className='text-2xl'>Burger</h1>
                        <span>Large</span>
                    </div>
                        <h2>RS. 345</h2>
                        <span className='cursor-pointer'>
                            <FaTrash size={20} color='red'/>
                        </span>
                </div>
                <div className='flex justify-between items-center font-bold mb-4 '>
                    <Image src="/temp/item1.png" alt='' height={100} width={100}/>

                    <div>
                        <h1 className='text-2xl'>Burger</h1>
                        <span>Large</span>
                    </div>
                        <h2>RS. 345</h2>
                        <span className='cursor-pointer'>
                            <FaTrash size={20} color='red'/>
                        </span>
                </div>
               
               
            </div>
             {/*payment constainer */}
             <div className='h-1/2 px-4 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 2xl:w-1/2  lg:px-20 xl:px-40'>
                    <div className='flex justify-between font-bold '>
                        <span>Total</span>
                        <span>120</span>
                    </div>
                    <div className='flex justify-between font-bold'>
                        <span>Discount</span>
                        <span>10%</span>
                    </div>
                    <div className='flex justify-between font-bold'>
                        <span>Delivery Charge</span>
                        <span className='text-green-600'>Free</span>
                    </div>
                    <hr />
                    <div className='flex justify-between font-bold '>
                    <span>Total (with 13% Vat)</span>
                    <span>RS. 500</span>
                    </div>
                    <button className='bg-primary-primary2 font-bold px-2 py-3 wd-1/2 rounded-md'>Checkout</button>
             </div>
        </div>
    );
};

export default CartPage;