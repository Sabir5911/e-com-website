'use client'
import shop from "../../../public/assets/shop.png";

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'      
import logo from "../../../public/assets/Logo.jpg";
import { RxHamburgerMenu } from 'react-icons/rx'


export default  function Hamburger({qty}:{qty:number}) {


    const [mobileMenu,setmobileMenu]=useState(false)  
  
  return (
    <div >
      <div onClick={()=>{setmobileMenu(!mobileMenu)}}>
      <RxHamburgerMenu />

      </div>
        <div >
  {mobileMenu && ( 
   <nav className='bg-white fixed right-0 top-0 h-screen w-full'>


   <div className="flex justify-between items-center justify-center"   >


    <div className='mt-12'>
    <Link href={"/"}>
        <Image
          src={logo}
          alt="image"
          width={130}
          height={130}
          className="cursor-pointer"
          />
      </Link>
    </div>
    

<div onClick={()=>{setmobileMenu(!mobileMenu)}} className='mt-12'>
<AiOutlineClose />
</div>
          </div>

<div className='mt-12'  onClick={()=>{setmobileMenu(false)}}>
<ul className="flex-col flex justify-center items-center text-sm gap-y-2 font-medium" >
        <Link href={"/Female"} >Female</Link>
        <Link href={"/Male"}>Male</Link>
        <Link href={"/kids"}>Kids</Link>
        <Link href="/AllProducts">All Products</Link>
        <li>           
        <div>
      <div>
        <span className=" w-5 h-5 float-right  rounded-md text-white bg-red-500 text-sm flex justify-center items-center">
          {qty}
        </span>
        <Link href={"/cart"}>
          <Image
            src={shop}
            alt="image"
            width={25}
            height={25}
            className="hover:scale-105 duration-300 h-auto w-auto "
          />
        </Link>
      </div>
    </div>
        </li>
      </ul>
</div>
     

   </nav> 


)}
</div>
      

    </div>
  )
}
