import React, { FC } from "react";
import Button from "../../shared/Button";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { PRODUCTS } from "@/app/[category]/page";


const Cards:FC <{name:string,title:string,price:string,image:IImage}>= ({image,name,price,title}) => {
  return (
    <>
      <section>
        <div className="mt-12 flex gap-x-11 justify-center ">
          {/* ////////////// */}
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
            <h1 className="text-4xl">{name}</h1>
            <text className="text-2xl text-[#C6C6C6] font-medium">{title}</text>
            </div>
           
            <div className="mt-16">
              <text  className="text-xl font-semibold">SELECT SIZE</text>
              <div className="flex gap-x-14 text-2xl mt-5 font-semibold text-[#666]">
                {["XS", "S", "M", "L", "XL"].map((elm) => (
                  <div className="rounded-full  hover: bg-slate-100scale-105  duration-300 shadow-2xl cursor-pointer">{elm}</div>
                ))}
              </div>
            </div>
                                      {/* //////////////////// */}

            <div>

            <h1 className="text-xl font-semibold mt-20">QUANTITY</h1>
            
          </div>
          <div className="mt-5 flex gap-x-10">
            <Button Text="ADD TO CART"/>
            <text className="text-3xl font-bold">{price}</text>
          </div>
          </div>
         
        </div>
      </section>
    </>
  );
}
export default Cards


// export default function Cards() {
//   return (
//     <>
//       <section>
//         <div className="mt-12 flex gap-x-11 justify-center ">
//           {/* ////////////// */}
//           <div>
//             <Image
//               src={"/assets/girl4.png"}
//               alt="ph"
//               height={700}
//               width={700}
//             />
//           </div>

//           <div>

//             <div className="mt-28">
//             <h1 className="text-4xl">Cameryn Sash Tie Dress</h1>
//             <text className="text-2xl text-[#C6C6C6] font-medium">Dress</text>
//             </div>
           
//             <div className="mt-16">
//               <text  className="text-xl font-semibold">SELECT SIZE</text>
//               <div className="flex gap-x-14 text-2xl mt-5 font-semibold text-[#666]">
//                 {["XS", "S", "M", "L", "XL"].map((elm) => (
//                   <div className="rounded-full  hover: bg-slate-100scale-105  duration-300 shadow-2xl cursor-pointer">{elm}</div>
//                 ))}
//               </div>
//             </div>
//                                       {/* //////////////////// */}

//             <div>

//             <h1 className="text-xl font-semibold mt-20">QUANTITY</h1>
            
//           </div>
//           <div className="mt-5 flex gap-x-10">
//             <Button Text="ADD TO CART"/>
//             <text className="text-3xl font-bold">545$</text>
//           </div>
//           </div>
         
//         </div>
//       </section>
//     </>
//   );
// }
