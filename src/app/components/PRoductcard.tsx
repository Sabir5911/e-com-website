"use client";
import { urlForImage } from "../../../sanity/lib/image";
import { PRODUCTS } from "@/app/AllProducts/page";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const PRoductcard = ({ data }: { data: PRODUCTS[] }) => {

  const { refresh } = useRouter();

  const [Quantity, setQuantity] = useState(1);

  const [Size, setSize] = useState("");

  /////////////
  const colorHAndle = (Selected_Size: string) =>
    Size == Selected_Size ? "bg-black text-white" : "bg-slate-300 text-white ";

  const handleSize = (size: string) => {
    setSize(size);
  };

  const increment = () => {
    setQuantity(Quantity + 1);
  };
  const decrement = () => {
    setQuantity(Quantity - 1);

    if (Quantity <= 1) {
      setQuantity(1);
    }
  };
  ////////////////////

  //////////////////////////
  const handlepost = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_name: data[0].name,
        price: data[0].price,
        quantity: Quantity,
        size: Size,
        image: urlForImage(data[0].image).url(),
        title: data[0].title,
      }),
    });
    const result = await res.json();
    refresh();

  };

  return (
    <>
      <div>
        {data.map((elm) => (
          <div className="mt-12 flex gap-x-11 justify-center ">
            <div>
              <Image
                src={urlForImage(elm.image).url()}
                alt="sa"
                width={500}
                height={500}
              />
            </div>

            <div>
              <div className="mt-28">
                <h1 className="text-4xl">{elm.name}</h1>
                <text className="text-2xl text-[#C6C6C6] font-medium">
                  {elm.title}
                </text>
              </div>

              <div className="mt-16">
                <text className="text-xl font-bold">SELECT SIZE</text>
                <div className="flex gap-x-12 text-2xl mt-5 font-semibold text-[#666]">
                  {["XS", "S", "M", "L", "XL"].map((elm) => (
                    <div
                      onClick={() => handleSize(elm)}
                      className={`w-10 h-10 flex justify-center items-center rounded-full cursor-pointer ${colorHAndle(
                        elm
                      )}`}
                    >
                      {elm}
                    </div>
                  ))}
                </div>
              </div>
              {/* //////////////////// */}

              <div className="flex gap-x-10 justify-center items-center mt-16">
                <h1 className="text-xl font-bold ">QUANTITY :</h1>
                <div className="flex items-center gap-x-2 text-2xl">
                  {/* Minus */}
                  <button
                    onClick={decrement}
                    className="w-8 h-8 border rounded-full center "
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
              <div className="mt-14 flex gap-x-10">
                <button
                  onClick={handlepost}
                  className="bg-blue-100 text-[#0000ff] px-6 py-2 rounded-md hover:shadow-xl font-semibold  text-lg "
                >
                  ADD TO CART
                </button>
                <text className="text-3xl font-bold self-center">{elm.price}$</text>
              </div>
            </div>
          </div>
        ))}
        {/* ////////////// */}
      </div>
    </>
  );
};
