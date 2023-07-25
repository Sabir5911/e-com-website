
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image'; 
import { Image as IIMAGE } from 'sanity';
import Image from 'next/image';
import Wrapper from '../shared/Wrapper';
import Link from 'next/link';

export interface PRODUCTS{
  image:IIMAGE,
  price:string,
  name:string
  category:string
  title:string
  slug:{
    current:string
  }  
  _id:string
} 
const productCategory=async (category:string)=>{

  const res:PRODUCTS[]=await client.fetch(`*[_type=='product']`)  
  
return(res) 

}

export default async function page({params}:{params:{category:string}}) {

  const result:PRODUCTS[]= await productCategory(params.category)
  
  return <>
  <Wrapper>

  <div className='flex flex-wrap justify-evenly items-center  gap-x-6'>

{

  result.map((elm,i=0)=>(
    <Link href={{pathname:`/products/${elm.slug.current}`}}  key={i+1}> 
<div className="mt-28">
<Image src={urlForImage(elm.image).url()} width={300} height={300}alt=' cateogory' className='rounded-md'/>
        <h3 className="font-bold text-lg mt-3">{elm.name}</h3>
        <span className="text-lg font-semibold text-gray-400">
            {elm.title}
          </span>
        <p className="font-bold text-lg">${elm.price}</p>
          
      </div>
      </Link>
  ))
}
    </div>
    </Wrapper>

  </>
}
