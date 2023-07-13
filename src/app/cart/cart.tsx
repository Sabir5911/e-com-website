"use client";
import Image from "next/image";
import { cart } from "../lib/drizzel";
import { useRouter } from "next/navigation";
import { Button } from "../shared/Button";

export const Cart = ({ data }: { data: cart[] }) => {

  console.log(data);
  
  let quantity: number = 0;
  const quantitys = data.forEach((elm) => {
    return <>{(quantity += elm.quantity)}</>;
  });

  let sum = 0;
  const value= data.forEach((elm) => {
    return <>{(sum += elm.price*elm.quantity)}</>;
  });

  return (
    <>
      <div className="flex   justify-around ">
        <div>
          {data.map((elm) => (
            <div className="flex gap-x-5 p-2 justify-start">
              <Image
                src={`${elm.image}`}
                width={280}
                height={280}
                alt="sa"
                className="rounded-md "
              />
              <div className="flex  flex-col justify-between gap-y-3">
                <div className="text-3xl "> {elm.product_name}</div>
                <div className="text-xl font-bold"> Size {elm.size}</div>
                <div className="text-xl font-bold"> {elm.title}</div>
                <div className="text-xl font-semibold">Delivery Estimation</div>
                <div className="text-xl font-semibold text-[#FFC700]">
                  5 Working Days
                </div>
                <div className="text-xl font-bold"> {elm.price}$</div>
                <div className="text-xl font-bold"> {elm.quantity}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ///////////////////////// */}

        <div className="bg-[#FBFCFF] w-[300px] h-[280px]">
          <div className="flex  flex-col  gap-y-4 ">
            <h1 className="text-2xl font-bold m-9">Order Summary</h1>

            <div className="flex justify-around">
              <text className="text-xl font-medium">Quantity</text>
              <div className="text-lg font-medium">{quantity} Product</div>
            </div>

            <div className="flex justify-around">
              <text className="text-xl font-medium">Sub Total</text>
              <div className="text-lg font-medium">${sum}</div>
            </div>
            <div className="flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};
