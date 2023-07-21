import Link from "next/link";
import React from "react";
import shop from "../../../public/assets/shop.png";
import Image from "next/image";
import { cart } from "../lib/drizzel";
import { useRouter } from "next/navigation";
import { cookies } from "next/dist/client/components/headers";

export default function CartButton({ data }: { data: cart[] }) {
  const cartdata: cart[] = data.filter(
    (elm) => elm.user_id == cookies().get("user_id")?.value);

  let sum: number = 0;
  const value = cartdata.forEach((elm) => {
    return <>{(sum += elm.quantity)}</>;
  });
;
  return (
    <div>
      <div>
        <span className=" w-6 h-6 float-right  rounded-md text-white bg-red-500 text-sm flex justify-center items-center">
          {sum}
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
  );
}
