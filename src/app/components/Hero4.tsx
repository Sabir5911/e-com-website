import React from 'react'
import Wrapper from '../shared/Wrapper'

export default function Hero4() {
  return <>       
  <Wrapper>

  
<div className='flex flex-col justify-center items-center   mt-40  relative  '>
<span className='absolute text-gray-500 text-[140px] font-bold  opacity-10 	'>Newsletter</span>

<h1 className='text-4xl font-bold mb-6'>Subscribe Our Newsletter</h1>
    <div className='text-base py-6 ' >Get the latest information and promo offers directly</div>
  
    <div className='flex  items-center gap-4 mt-40 absolute' >
        <input placeholder='input email adress ' className='border text-base w-72 h-12 pl-3 rounded-none'></input>
        <button className='bg-black text-white font-semibold px-3 py-3 rounded-sm text-sm'>Get Started</button>
    </div>
</div>     

  </Wrapper>
  </>
}