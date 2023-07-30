"use client";
import Image from "next/image";
import { cart } from "../lib/drizzel";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import getStipePromise from "../lib/stripe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cart = ({ data }: { data: cart[] }) => {
  const notify = () => toast.error(`Successfully Removed  `, {
    position: "top-center",
    autoClose: 2000,
    theme: "light",
    });
  const { refresh } = useRouter();

  const products = data;
  const router=useRouter()
  if(products.length==0){

router.push('./empty')
  }
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

  const quantitys = data.forEach((elm) => (quantity += elm.quantity))

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
        });  refresh();

      }

    } catch (error) {
      console.log("An error occurred during the delete request:", error);
    }
  };

  return (
    <>
{/* lg:top-0 absolute right-0  */}

      <div className="flex   justify-start    flex-wrap "  >
        <div >
          {data.map((elm,i=0) => (
            <div className="flex gap-x-10 p-2 justify-around flex-wrap flex-1		" key={i+1}>
              <Image
                src={`${elm.image}`}
                width={150}
                height={150}
                alt="sa"
                className="rounded-md	w-auto h-auto	mb-5 "
              />
              <div className="flex  flex-col flex-wrap   justify-center  ">
                <div className="text-xs flex gap lg:text-lg  font-bold "> {elm.product_name}</div>
                <div className="text-xs text-[#94A3B8] font-bold "> {elm.title}</div>
                <div className="text-xs font-bold"> {elm.price}$</div>

                {/* ///////////// */}
              
              

<div className="mt-3 lg:mt-5 "> 
  
<div className="text-sm font-medium ">Delivery Estimation</div>
                <div className="text-xs font-semibold text-[#FFC700]">
                  5 Working Days
                </div>

                <div className="flex gap-5 text-[#85858B]"> 
                
                <div className="text-xs font-sans font-semibold">
                  Qty:{elm.quantity}
                </div>
                  <div className="text-xs font-sans font-semibold "> Size :{elm.size}</div>

                  </div>
                
              </div>
             
  </div>
  <div className="float right my-auto " onClick={notify}>
  <ToastContainer
                position="top-center"
                autoClose={2000}
              
                theme="light"
                style={{ width: "250px"}}                

                />

              
              <button onClick={() => handleDelete(elm.id)}>

                {" "}
                <AiOutlineDelete size={15} />
              </button>
                </div>
            </div>
          ))}      
        </div>
     
        {/* ///////////////////////// */}

        <div className="bg-[#D1D5DB] w-[280px] h-[200px] rounded-md px-6   mx-auto      mt-6   ">
          
        <h1 className="text-lg  font-bold mt-3">Order Summary</h1>

          <div className="flex  flex-col  justify-start">


            <div className="flex justify-between mt-5">
              <text className="text-lg font-medium">Items in Cart:</text>
              <div className="text-lg font-medium">{quantity} </div>
            </div>
            <hr />

            <div className="flex justify-between mt-5">
              <text className="text-lg font-sans">Sub Total</text>
              <div className="text-lg font-sans">${sum}</div>

            </div>
            <hr />
            
            <div className="flex justify-center items-center"></div>
          </div>

          <button
            onClick={handleCheckout}
            type="button"
            className="inline-block rounded flex  mt-4 mx-auto bg-[#3061AF] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};
