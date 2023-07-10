'use client'
import React, { FC } from 'react' 
import Image from 'next/image'
import { cart } from '../lib/drizzel'
import  {useRouter} from'next/navigation'


export const Cart: FC<cart> = ({  product_name, size, price, title,image }) => {
    const {refresh} =useRouter()

    refresh()

    return <>
  
  
  <div  className='flex gap-x-11 justify-start items-center'>
                {/* ////////////// */}
             <div> 
             <Image src={`${image}`} width={250} height={250}alt='sa' className='rounded-md'/>
             </div>
             <div className='flex gap-3 flex-col justify-between'> 
                <div className='text-3xl '> {product_name}</div>
                <div className='text-xl font-bold'> Size {size}</div>
                <div className='text-xl font-bold'> {title}</div>
                <div className='text-xl font-semibold'>Delivery Estimation</div>
                <div className='text-xl font-semibold text-[#FFC700]'>5 Working Days</div>
                <div className='text-xl font-bold'> {price}$</div>



             </div>
             {/* ////////// */}
            
            
                </div>
  </>
}
