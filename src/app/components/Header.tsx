

"use client"
import Image from "next/image";
import logo from "../../../public/assets/Logo.jpg";
import serch from "../../../public/assets/serch.png";
import Wrapper from "../shared/Wrapper";
import { getData } from "../cart/page";
import { cart } from "../lib/drizzel";

import CartButton from "./CartButton";
import Link from "next/link";

export default async function Header() {
  const data: cart[] = await getData();

  return (
    <>
        <main className="mt-12">
          <div className="flex justify-evenly items-center ">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="image"
                width={150}
                height={150}
                className="cursor-pointer"
              />
            </Link>
            <ul className="flex justify-center items-center text-lg gap-x-12 font-medium">
              <Link href={"/Female"}>Female</Link>
              <Link href={"/Male"}>Male</Link>
              <Link href={"/kids"}>Kids</Link>
              <Link href="/AllProducts">All Products</Link>
            </ul>

            <div className=" border border-slate-300 rounded-md flex  h-8 w-96  gap-x-2 items-center justify-start ">
              <Image src={serch} alt="image" width={25} height={25} />
              <input
                type="email"
                name="email"
                className=" outline-0	 "
                placeholder="What are you looking for"
              />

            </div>
            <CartButton data={data} />
          </div>
        </main>
    </>
  );
}

