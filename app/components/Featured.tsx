
import React from "react";
import Image from "next/image";

import { FaCartShopping } from "react-icons/fa6";
import {  ProductType } from "../types/types";

const getData = async () => {
  
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();

  
};

const Featured = async () => {
  const featuredProducts:ProductType[] = await getData();
 
  return (
    <div className="w-full overflow-scroll xl:no-scrollbar mt-6">
      {/*wrapper*/}
      <div className="w-max flex ">
        {/*single item*/}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col justify-around items-center p-5 gap-5 hover:bg-slate-700 rounded transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/*image*/}
            {item.image && (
              <div className="relative flex-1 w-full ">
                <Image
                  src={item.image}
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/*text*/}
            <div className="flex-1 flex flex-col justify-center gap-6 mt-3 text-center">
              <h2 className="font-bold uppercase text-2xl">{item.title}</h2>
              {/* <span>{item.description}</span> */}
              <p>
                Rs.
                <span className="font-bold text-xl">{item.price}</span>{" "}
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
