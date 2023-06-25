import Image from 'next/image'
import React, { FC } from 'react'
interface props {
 Text:string,
Number:string
Number2:string
Image:any
color:boolean
}

const Boxes :FC<props>=({Text,Number,Number2,color,Image})=> {
  return (

    <div className={`  w-72  h-[406px] ${color===true?"bg-[#C2E1C7]":"bg-[#D7D7D9]"}`}>
 <div className='flex flex-col justify-center ml-5 ' >
    <h4 className='font-thick  text-lg pt-10'>{Text}</h4>
    <div className='flex  gap-3 mt-2 '>
    <text  className='line-through text-xl'>{Number2}</text>
    <text className='text-xl font-bold'>{Number}</text> 
    </div>

</div>
<div className='flex justify-center items-center'>
<Image src={Image} alt='sa' width={230} height={230}  />
    
</div>

    </div>
   
  )
}

export default Boxes