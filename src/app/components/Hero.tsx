import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/Logo.jpg'
import serch from '../../../public/assets/serch.png'
import shop1 from '../../../public/assets/shop1.svg'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import girl from '../../../public/assets/girl.jpg'
import s from '../../../public/assets/s.webp'
 import bust from '../../../public/assets/bust.webp'
import bust3 from '../../../public/assets/bust3.webp'
import bust4 from '../../../public/assets/bust4.webp'

export default function Hero() {
  return <>
    <Wrapper>

      <main className='mt-44'>

        <div className='flex justify-around items-center'>
          <div className='flex flex-col justify-center  '>
            <div>
              <Button Text='Sale 70%' />
            </div>
            <div className='mt-8  max-w-lg'>
              <h1 className='text-6xl font-bold mt-3 '>
                An Industrial  Take on streetwear
              </h1>
              <div className='mt-5  text-lg max-w-xs'>
              <text >
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
              </text>
            </div>
                      
            <div className='mt-12 '>

            <button className='flex justify-center items-center bg-slate-900 border text-white py-4 px-5 rounded-sm hover:shadow-xl font-bold  text-lg hover:scale-105 duration-300' >
            <Image src={shop1} alt='as' className='w-10 h-10 ' />

    Start Shopping
    </button>

            </div>
            </div>




            <div className='flex  flex-wrap gap-x-8 mt-6 '>
              <Image src={s} alt='image' />
              <Image src={bust} alt='image' />
              <Image src={bust3} alt='image' />      
              <Image src={bust4} alt='image' />

            </div>
          </div>     
        
          <div >

  <Image src={girl} alt='image' width={500} height={500} />
</div>

        </div>


      </main>
    </Wrapper>

  </>
}
