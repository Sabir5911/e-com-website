import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
export default function Footer() {
  return <>
  <Wrapper>
<div className= 'flex justify-around mt-24 justify-center'>
    {/* // first div */}
<div className='flex flex-col  gap-4 '>
    <Image src={'/assets/Logo.jpg'} alt='logo'width={159}height={159} />

<p className='max-w-[280px] text-base text-slate-600 '>
Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.

</p>
</div>

{/* second div */}
<div className='flex flex-col gap-3'>
    <h2 className='text-xl font-semibold text-slate-600'>Company</h2>
    <ul className='flex flex-col justify-center  text-slate-700 gap-2  text-base '>
        <li>About</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>How it Works</li>
        <li>Contact Us</li>
    </ul>
</div>
{/* third */}
<div className='flex flex-col  gap-3 '>
    <h2 className='text-xl font-semibold text-slate-600'>Support</h2>
    <ul className='flex flex-col justify-center  text-slate-700 gap-2 '>
        <li>Support Carrer</li>
        <li>24h Service</li>
        <li>Quick Chat</li>
       </ul>
</div>
{/* fourth */}
<div className='flex flex-col gap-3' >
    <h2 className='text-xl font-semibold text-slate-600'>Contact</h2>
    <ul className='flex flex-col justify-center  text-slate-700 gap-2 '>
        <li>Whatsapp</li>
        <li>Support 24h</li>
    
    </ul>
</div>
</div>
  </Wrapper>
  <hr className=' border-slate-800 mt-24 mb-6' />
  <Wrapper>
  <div className='flex justify-around mb-2 text-lg'>
    <h1>
    Copyright © 2023 5911
    </h1>
    <h2>
    Design by.<b>5911</b> 
    </h2>
    <h3>
    Code by  5911 on github
    </h3>
  </div>
  
  </Wrapper>

  
  </>
  }