import React from 'react';
import Image from "next/image";
import CartIcon from "@/app/components/CartIcon";
import {BiCart} from "react-icons/bi";
import {FaCartShopping} from "react-icons/fa6";

const Featured = () => {
    return (
        <div className="w-screen overflow-x-scroll ">
            {/*wrapper*/}
           <div className="w-max flex">

               {/*item*/}
               <div className="w-screen h-[60vh] flex flex-col justify-around items-center p-5 gap-5">
                   {/*image*/}
                   <div className="relative flex-1 w-full">
                       <Image src="/temp/item1.png" alt="image" fill className="object-contain"/>
                   </div>
                       {/*text*/}
                       <div className="flex-1 flex flex-col gap-4 text-center">
                            <h2 className="font-bold uppercase text-2xl">ham burger </h2>
                          <p>
                            Rs.
                         <span className="font-bold text-xl"> 250</span> </p>
                           <button className="px-5 py-2 font-bold bg-primary-primary2 rounded flex gap-3 items-center text-xl">Add to cart <FaCartShopping/></button>
                       </div>

               </div>
           </div>
        </div>
    );
};

export default Featured;