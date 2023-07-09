"use client";
import React, { FC } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { PRODUCTS } from "@/app/AllProducts/page";
import { useState } from "react";
import Image from "next/image";
export const PRoductcard: FC<PRODUCTS> = ({ image, name, price, title }) => {
  const [Quantity, setQuantity] = useState(1);

  const [Size, setSize] = useState("XS");
  const [color, setcolor] = useState(true);

  const clickhandle=()=>{
    setcolor(!color)
  }
console.log(color);

  console.log(Size);

  const handleSize = (size: string) => {
    setSize(size);
  };

  console.log(Quantity);

  const increment = () => {
    setQuantity(Quantity + 1);
  };
  const decrement = () => {
    setQuantity(Quantity - 1);

    if (Quantity < 1) {
      setQuantity(1);
    }
  };

  const handlepost = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_name: name,
        price: price,
        quantity: Quantity,
        size: Size,
        image: urlForImage(image).url(),
        title: title,
      }),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div className="mt-12 flex gap-x-11 justify-center ">
      {/* ////////////// */}
      <div>
        <Image
          src={urlForImage(image).url()}
          alt="sa"
          width={500}
          height={500}
        />
      </div>

      <div>
        <div className="mt-28">
          <h1 className="text-4xl">{name}</h1>
          <text className="text-2xl text-[#C6C6C6] font-medium">{title}</text>
        </div>

        <div className="mt-16">
          <text className="text-xl font-semibold">SELECT SIZE</text>
          <div className="flex gap-x-14 text-2xl mt-5 font-semibold text-[#666]">
            {["XS", "S", "M", "L", "XL"].map((elm) => (
              <div
                onClick={() => handleSize(elm)}  onChange={clickhandle}
                className={`w-10 h-10 flex justify-center items-center rounded-full  ${color===true?"bg-slate-300":""}  duration-300 shadow-2xl cursor-pointer`} 
              >
                {elm}
              </div>
            ))}
          </div>
        </div>
        {/* //////////////////// */}

        <div className="flex gap-x-10 justify-center items-center mt-16">
          <h1 className="text-xl font-semibold ">QUANTITY :</h1>
          <div className="flex items-center gap-x-2 text-2xl">
            {/* Minus */}
            <button
              onClick={decrement}
              className="w-8 h-8 border rounded-full center"
            >
              -
            </button>
            {/* Number */}
            <span className="text-sm">{Quantity}</span>
            {/* Plus */}
            <button
              onClick={increment}
              className="w-8 h-8 border rounded-full center text-2xl"
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-5 flex gap-x-10">
          <button
            onClick={handlepost}
            className="bg-blue-100 text-[#0000ff] px-6 py-2 rounded-md hover:shadow-xl font-semibold  text-lg hover:scale-105 duration-300"
          >
            ADD TO CART
          </button>
          <text className="text-3xl font-bold">$ {price}</text>
        </div>
      </div>
    </div>
  );
};
