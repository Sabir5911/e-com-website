"use client";
import Image from "next/image";
import { cart } from "../lib/drizzel";
import { useRouter } from "next/navigation";
import { Button } from "../shared/Button";

export const Cart = ({ data }: { data: cart[] }) => {
  const { refresh } = useRouter();


  let quantity: number = 0;
  const quantitys = data.forEach((elm) => {
    return <>{(quantity += elm.quantity)}</>;
  });
  refresh();


  let sum=0
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
      
      <div className="bg-gray-100 w-[260px] h-[250px] rounded-md">

<div className="flex  flex-col  gap-y-4 justify-center ">

<h1 className="text-lg font-bold m-3">Order Summary</h1>

  <div className="flex justify-around">
    <text className="text-lg font-normal">Items in Cart:</text>
    <div className="text-lg font-normal">{}</div>
  </div>

  <div className="flex justify-around">
    <text className="text-lg font-normal">Sub Total:{sum}$</text>
    <div className="text-lg font-normal">Total Quantity{quantity}$</div>
 
</div>
<div className="flex justify-center items-center">
<Button Text={'check out'} />

</div>

</div>

</div>
      </div>

    </>
  );
};
