import Image from "next/image";
import logo from "../../../public/assets/Logo.jpg";
import serch from "../../../public/assets/serch.png";
import  getData  from "../cart/GetData";
import { cookies } from "next/dist/client/components/headers";
import { cart } from "../lib/drizzel";
import CartButton from "./CartButton";
import Link from "next/link";
import Hamburger from "./Hamburger";





export default  async function Header() {

  const data=await getData()
  const cartdata: cart[] = data.filter(
    (elm:cart) => elm.user_id == cookies().get("user_id")?.value
  );

 let total_Quantity: number = 0;

  const value = cartdata.forEach((elm) =>  (total_Quantity += elm.quantity))
  return <>
        <main className="mt-12">

        <div className="flex justify-between items-center  ">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="image"
                width={150}
                height={150}
                className="cursor-pointer"
              />
            </Link>


            <ul className=" justify-center items-center text-base gap-x-12 font-medium hidden lg:flex ">
              <Link href={"/Female"}>Female</Link>
              <Link href={"/Male"}>Male</Link>
              <Link href={"/kids"}>Kids</Link>
              <Link href="/AllProducts">All Products</Link>
            </ul>

            <div className=" border border-slate-300 rounded-md   h-8 w-96  gap-x-2 items-center justify-start hidden lg:flex ">
              <Image src={serch} alt="image" width={25} height={25} />
              <input
                type="email"
                name="email"
                className=" outline-0	 "
                placeholder="What are you looking for"
              />


            </div>
            <div className='flex  items-center justify-center gap-3'>
              <div className='hidden lg:flex'>
              <CartButton   qty={total_Quantity}/>

              </div>
              <div className='lg:hidden'>
              <Hamburger  qty={total_Quantity} />

              </div>

             </div>

          </div>   

        </main>
    </>
}

