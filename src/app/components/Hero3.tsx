import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
export default function Hero3() {
  return (
    <>
      <div className="flex  justify-center ml-[500px] mt-32 ">
        <h1 className="text-5xl font-bold max-w-lg -mb-12 ">
          Unique and Authentic Vintage Designer <br /> Jewellery
        </h1>
      </div>
      <div className="bg-[#FBFCFF] ">
        <Wrapper>
          {/* // first box */}

          <div className="grid grid-cols-2 place-items-center     h-[500px] pt-12 ">
            {/* Main box */}

            <div className="flex justify-center relative items-center gap-x-28 ">
              <span className="  absolute text-[85px]  font-bold  opacity-10 text-gray-500 z-10 -mb-6">
                Different from others
              </span>

              <div className="flex flex-col gap-y-10">
                <div>
                  <h1 className="text-lg font-bold">
                    Using Good Quality <br /> Materials
                  </h1>
                  <p className="text-base mt-3 ">
                    Lorem ipsum dolor sit <br />
                    amt consectetur <br />
                    adipiscing elit.
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-bold">
                    Modern Fashion <br />
                    Design
                  </h1>
                  <p className="text-base mt-2">
                    Lorem ipsum dolor sit <br /> amt consectetur <br />{" "}
                    adipiscing elit.
                  </p>
                </div>
              </div>

              {/* second */}
              <div className="flex flex-col gap-y-10 ">
                <div>
                  <h1 className="text-lg font-bold">
                    100% Handmade <br /> Products
                  </h1>
                  <p className="text-base mt-2">
                    Lorem ipsum dolor sit <br /> amt consectetur
                    <br /> adipiscing elit.
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-bold">
                    Discount for Bulk <br />
                    Orders
                  </h1>
                  <p className="text-base mt-2">
                    Lorem ipsum dolor sit <br /> amt consectetur <br />{" "}
                    adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            {/* secondbox */}
            <div className=" flex justify-center items-center gap-x-12  ">
              <Image
                src={"/assets/girl5.png"}
                alt="12"
                width={300}
                height={300}
              />
              <div>
                <p className="text-sm text-slate-700 tracking-widest    text-lg max-w-2xl">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <Link href={"/AllProducts"}>
                  <button className="bg-black text-white font-semibold mt-6 px-4 py-2">
                    See all products
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* second box */}
        </Wrapper>
      </div>
    </>
  );
}
