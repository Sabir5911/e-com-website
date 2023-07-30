import Link from "next/link";
import React from "react";
import shop from "../../../public/assets/shop.png";
import Image from "next/image";
import { cart } from "../lib/drizzel";
import { cookies } from "next/dist/client/components/headers";
import getData from "../cart/GetData";

export default async function CartButton({qty}:{qty:number}) {


  // this is fnc will get the user_id and comapre it with the cookies which we store in local data base
  // const cartdata: cart[] = data.filter(
    // (elm) => elm.user_id == cookies().get("user_id")?.value
  // );
  // let total_Quantity: number = 0;
  //  this fnc will calculate the quantity of products and store the res in total_Quantity

  // const value = cartdata.forEach((elm) => {
  //   return <>{(total_Quantity += elm.quantity)}</>;
  // });
  return (
    <div>
      <div>
        <span className=" w-5 h-5 float-right  rounded-md text-white bg-red-500 text-sm flex justify-center items-center">
          {qty}
        </span>
        <Link href={"/cart"}>
          <Image
            src={shop}
            alt="image"
            width={25}
            height={25}
            className="hover:scale-105 duration-300 h-auto w-auto "
          />
        </Link>
      </div>
    </div>
  );
}
