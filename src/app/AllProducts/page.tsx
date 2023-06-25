
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image'; 
import { Image as IIMAGE } from 'sanity';
import Image from 'next/image';
import Wrapper from '../shared/Wrapper';

export interface PRODUCTS{
  image:IIMAGE,
  discription:string,
  price:string,
  name:string
  category:string
  title:string
} 
const productCategory=async (category:string)=>{

  const res:PRODUCTS[]=await client.fetch(`*[_type=='product']`)  
  
return(res) 

}

export default async function page({params}:{params:{category:string}}) {

  const result:PRODUCTS[]= await productCategory(params.category)
  console.log(result);   
  
  return <>
  <Wrapper>

  <div className='flex flex-wrap justify-around items-center '>
{
  result.map((elm)=>(
<div className="mt-28">
        <Image src={urlForImage(elm.image).url()} width={400} height={400}alt='sa'/>
        <h3 className="font-bold text-lg mt-3">{elm.name}</h3>
        <span className="text-lg font-semibold text-gray-400">
            {elm.title}
          </span>
        <p className="font-bold text-lg">${elm.price}</p>
          
      </div>
    
  ))
}
    </div>
    </Wrapper>

  </>
}
