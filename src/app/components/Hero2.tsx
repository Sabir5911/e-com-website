import { PRODUCTS } from "@/app/AllProducts/page";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Wrapper from "@/app/shared/Wrapper";
import Link from "next/link";

export default async function Hero2() {
  const res: PRODUCTS[] = await client.fetch(`*[_type=='product']`);

  const data = res.slice(0, 3);

  return (
    <>
        <div className="flex flex-col justify-center items-center ">
          <text className="text-[#0093F8] text-xl font-bold py-11">
            PRODUCTS
          </text>
          <h1 className="text-4xl font-bold text-center">Check What We Have</h1>
        </div>

        <div className="flex flex-wrap justify-evenly items-center ">
          {data.map((elm,i=0) => (
            <Link href={{ pathname: `/products/${elm.slug.current}` }}  key={i+1}>
              <div className="mt-10 rounded-md ">
                <Image
                  src={urlForImage(elm.image).url()}
                  width={300}
                  height={300}
                  alt="sa"
                  className="hover:scale-110 duration-500"
                />
                <h3 className="font-bold text-lg mt-3">{elm.name}</h3>
                <span className="text-lg font-semibold text-gray-400">
                  {elm.title}
                </span>
                <p className="font-bold text-lg">${elm.price}</p>
              </div>
            </Link>
          ))}
        </div>
    </>
  );
}
