import React from 'react'
import { cart } from '../lib/drizzel'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'

const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "e-com-website-seven.vercel.app";


const getData=async() =>{
  try {
    const data = await fetch(`${BASE_URL}/api/cart`, {
      cache: "no-store",
    });
   
    return await data.json();
  } catch (error) {
    console.log((error as { message: string }).message);
  }
}
export default async function page() {

    const data:cart[]=await getData()
    console.log(data);
        
  return <>
  <Wrapper>
  <div className='mt-28'>    

<h1 className='text-3xl  font-bold pb-10'>Shopping Cart </h1>
    {
        data.map((elm)=>(
            <div  className='flex gap-x-11 justify-start items-center'>
                {/* ////////////// */}
             <div> 
             <Image src={`${elm.image}`} width={250} height={250}alt='sa' className='rounded-md'/>
             </div>
             <div className='flex gap-3 flex-col justify-between'> 
                <div className='text-3xl '> {elm.product_name}</div>
                <div className='text-xl font-bold'> Size {elm.size}</div>
                <div className='text-xl font-bold'> {elm.title}</div>
                <div className='text-xl font-semibold'>Delivery Estimation</div>
                <div className='text-xl font-semibold text-[#FFC700]'>5 Working Days</div>
                <div className='text-xl font-bold'> {elm.price}$</div>



             </div>
             {/* ////////// */}
            
            
                </div>
        ))
    }
  </div>
  </Wrapper>
  </>
}
   {/* 
               

           */}