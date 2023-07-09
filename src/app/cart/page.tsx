import React from 'react'
import { cart } from '../lib/drizzel'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'
const handlepost=async()=>{
try{
    const res=await fetch("http:127.0.0.1:3000/api/cart",{
        method:"GET",
        headers:{
            "Content-Type":"application.json"
        }
    })
    if(!res.ok){
        throw new Error('fAILED TO FETCH DATA')
    }
    const result=await res.json()
    return result
}catch(err){
console.log(err);

}
    
}

export default async function page() {

    const data:{res:cart[]}=await handlepost()
    console.log(data);
        
  return <>
  <Wrapper>
  <div className='mt-28'>    

<h1 className='text-3xl  font-bold pb-10'>Shopping Cart </h1>
    {
        data.res.map ((elm)=>(
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