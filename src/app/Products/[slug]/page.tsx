import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { Button } from "../../shared/Button";
import Image from "next/image";
import { PRODUCTS } from "@/app/[category]/page";
import Quantity from "@/app/components/quantity/Quantity";
const FetchData = async (slug: string) => {
  const data = await client.fetch(
    `*[_type=='product' && slug.current=='${slug}']`
  );
  return data;
};
export default async function PRODUCTSDETAILS({
  params,
}: {
  params: { slug: string };
}) {
  const res: PRODUCTS[] = await FetchData(params.slug);
  console.log(res);

  return (
    <div>
      {res.map((elm: PRODUCTS) => (
        <div className="mt-12 flex gap-x-11 justify-center ">
          {/* ////////////// */}
          <div>
            <Image
              src={urlForImage(elm.image).url()}
              alt="sa"
              width={500}
              height={500}
            />
          </div>

          <div>
            <div className="mt-28">
              <h1 className="text-4xl">{elm.name}</h1>
              <text className="text-2xl text-[#C6C6C6] font-medium">
                {elm.title}
              </text>
            </div>

            <div className="mt-16">
              <text className="text-xl font-semibold">SELECT SIZE</text>
              <div className="flex gap-x-14 text-2xl mt-5 font-semibold text-[#666]">
                {["XS", "S", "M", "L", "XL"].map((elm) => (
                  <div className="rounded-full  hover: bg-slate-100scale-105  duration-300 shadow-2xl cursor-pointer">
                    {elm}
                  </div>
                ))}
              </div>
            </div>
            {/* //////////////////// */}

            <div className="flex gap-x-10 justify-center items-center mt-16">
              <h1 className="text-xl font-semibold ">QUANTITY :</h1>
              <Quantity />
            </div>
            <div className="mt-5 flex gap-x-10">
              <Button Text="ADD TO CART" />
              <text className="text-3xl font-bold">{`$  ${elm.price}`}</text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
