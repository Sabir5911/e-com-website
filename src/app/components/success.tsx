import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { GiShoppingBag } from 'react-icons/gi'

export default function Success() {
  const { refresh } = useRouter();
  
  
  const handleDelete = async () => {
    const response = await fetch(`/api/cart/success`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        
      },
    

    }); 
    refresh()

  }
  useEffect(()=>{
    handleDelete()
  })
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-28 gap-7 flex-wrap flex-1'>

<div className='flex-flex-1 w-auto h-auto'>
<GiShoppingBag size={'100'}/>
</div>

<ul className='flex flex-col text-xl justify-center items-center flex-1 gap-y-5'>
<li>Thank you for your order!</li> 
<li>Check your email inbox for the receipt.</li>
<li>If you have any questions, please email:</li>

</ul>

<Link href={'/'}>
<button className='bg-black p-3 text-white rounded-md hover:p-2.5 '   >Continue Shopping</button>
</Link>
</div>
    </div>
  )
}
