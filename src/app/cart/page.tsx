
import React from 'react'
import { cart } from '../lib/drizzel'
import { cookies } from "next/dist/client/components/headers";
import { Cart } from './cart'
const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://ecom-59111.vercel.app";
    
export  const getData=async() =>{
 
  try {
    const res = await fetch(`${BASE_URL}/api/cart`, {
      headers:{
        "Content-type":"application/json"
      },
      method:"GET",
      cache: "no-store",

    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
   const result= await res.json();



  return result
  } catch (error) {
    console.log((error as { message: string }).message);
  }


}
export default async function page() {
 

     const data:cart[]=await getData()    
    const cartdata:cart[]=data.filter((elm)=>elm.user_id==cookies().get('user_id')?.value)  
    
  return <>
  <div className='mt-28'>    

<h1 className='text-3xl  font-bold pb-10'>Shopping Cart </h1>

    <Cart data={cartdata}/>
  </div>
  </>
}
   {/* 
               

           */}