
import Image from "next/image";

import logo from "../../../public/assets/Logo.jpg";
import serch from "../../../public/assets/serch.png";
import shop from "../../../public/assets/shop.png";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
export default function Header() {


  return (
    <>
      <Wrapper>
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

              {/* ?? */}
            </div>
            <div>
              <span className=" w-5 h-5 float-right  rounded-md text-white bg-red-500 text-sm flex justify-center items-center">
                {}
              </span>
              <Link href={"/cart"}>
                <Image
                  src={shop}
                  alt="image"
                  width={35}
                  height={35}
                  className="hover:scale-105 duration-300  "
                />
              </Link>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
}
