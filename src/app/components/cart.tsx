"use client";
import Image from "next/image";
import { cart } from "../lib/drizzel";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import getStipePromise from "../lib/stripe";

export const Cart = ({ data }: { data: cart[] }) => {
  const { refresh } = useRouter();

  const products = data;
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("api/cart/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  let quantity: number = 0;

  const quantitys = data.forEach((elm) => {
    return <>{(quantity += elm.quantity)}</>;
  });

  let sum = 0;
  const value = data.forEach((elm) => {
    return <>{(sum += elm.price * elm.quantity)}</>;
  });

  const handleDelete = async (id: number) => {
    try {
      if (id) {
        const response = await fetch(`/api/cart?id=${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (error) {
      console.log("An error occurred during the delete request:", error);

    }
  };
  refresh();

  return (
    <>
      <div className="flex   justify-around ">
        <div>
          {data.map((elm) => (
            <div className="flex gap-x-5 p-2 justify-start my-12 ">
                 <Image
                src={`${elm.image}`}
                width={280}
                height={280}
                alt="sa"     
                className="rounded-md "
              />
              <div className="flex  flex-col justify-between gap-y-3">
                <div className="text-3xl flex gap"> {elm.product_name}</div>
                <div className="text-xl font-bold"> Size {elm.size}</div>
                <div className="text-xl font-bold"> {elm.title}</div>
                <div className="text-xl font-semibold">Delivery Estimation</div>
                <div className="text-xl font-semibold text-[#FFC700]">
                  5 Working Days
                </div>
                <div className="text-xl font-bold"> {elm.price}$</div>
                <div className="text-xl font-bold">
                  {" "}
                  Quantity:{elm.quantity}
                </div>
              </div>
              <button onClick={() => handleDelete(elm.id)}>
                {" "}
                <AiOutlineDelete size={35} />
              </button>
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

          <button
            onClick={handleCheckout}
            type="button"
            className="inline-block rounded flex  mx-auto bg-[#3061AF] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};
