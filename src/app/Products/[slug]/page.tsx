import Button from "../../shared/Button";
import React from "react";
import Image from "next/image";
import Cards from "@/app/components/Cards/Cards";         
import { PRODUCTS } from "@/app/[category]/page";
import { client } from "../../../../sanity/lib/client";

const Data=async (slug:any)=> {
    const res:PRODUCTS[]=await client.fetch(`*[_type=='product' && slug.current->name==${slug.current}]`)

    return(res)

}

export default async function page({params}:{params:{slug:any}}) {
    const data:PRODUCTS[]=await Data(params.slug)
console.log(params.slug);
    return<>

    {params.slug}
 {    
    data.map((elm)=>(
        <section>
        <div className="mt-12 flex gap-x-11 justify-center ">
          <div>
            <Image
              src={"/assets/girl4.png"}
              alt="ph"
              height={700}
              width={700}
            />
          </div>

          <div>

            <div className="mt-28">
            <h1 className="text-4xl">{elm.name}</h1>
            <text className="text-2xl text-[#C6C6C6] font-medium">{elm.title}</text>
            </div>
           
            <div className="mt-16">
              <text  className="text-xl font-semibold">SELECT SIZE</text>
              <div className="flex gap-x-14 text-2xl mt-5 font-semibold text-[#666]">
                {["XS", "S", "M", "L", "XL"].map((elm) => (
                  <div className="rounded-full  hover: bg-slate-100scale-105  duration-300 shadow-2xl cursor-pointer">{elm}</div>
                ))}
              </div>
            </div>

            <div>

            <h1 className="text-xl font-semibold mt-20">QUANTITY</h1>
            
          </div>
          <div className="mt-5 flex gap-x-10">
            <Button Text="ADD TO CART"/>
            <text className="text-3xl font-bold">{elm.price}</text>
          </div>
          </div>
         
        </div> 
      </section>
    ))
 }
 </>

}  








