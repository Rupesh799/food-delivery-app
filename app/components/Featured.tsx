import React from "react";
import Image from "next/image";
import CartIcon from "@/app/components/CartIcon";
import { BiCart } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { featuredProducts } from "../constant/data";

const Featured = () => {
  return (
    <div className="w-full overflow-scroll xl:no-scrollbar mt-6">
      {/*wrapper*/}
      <div className="w-max flex flex-nowrap">
        {/*single item*/}
        { featuredProducts.map((product)=>(
          <div key={product.id} className="w-screen h-[60vh] flex flex-col justify-around items-center p-5 gap-5 hover:bg-slate-700 rounded transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
            {/*image*/}
            {product.img &&  <div className="relative flex-1 w-full">
              <Image
                src={product.img}
                alt="image"
                fill
                className="object-contain"
              />
            </div>}
            {/*text*/}
            <div className="flex-1 flex flex-col gap-6 mt-3 text-center">
              <h2 className="font-bold uppercase text-2xl">{product.title}</h2>
              <p>
                Rs.
                <span className="font-bold text-xl">{product.price}</span>{" "}
              </p>
              <button className="px-5 py-2 font-bold bg-primary-primary2 rounded flex gap-3 items-center text-xl">
                Add to cart <FaCartShopping />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
