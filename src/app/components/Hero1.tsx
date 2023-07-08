import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import boy1 from "../../../public/assets/boy1.webp";
import { Data, Data2 } from "./Data/Data";
export default function Hero1() {
  return (
    <>
      <section>
        <Wrapper>
          <div className="flex flex-col justify-center items-center mt-32 gap-y-4">
            <text className="text-[#0062F5] font-semibold">PROMOTIONS</text>
            <h1 className="text-4xl font-semibold">Our Promotions Events</h1>
          </div>
          <div className="grid grid-cols-2 mt-12   ">
            {/* first box */}
            <div>
              <div className="flex flex-col justify-center items-center gap-3 ">
                <div className="bg-[#D6D6D8] flex  items-center w-[500px] h-52  ">
                  <div className="ml-12">
                    <h1 className="text-3xl font-bold ">GET UP TO 60%</h1>
                    <text className="text-lg pt-3">
                      For the summer <br /> season
                    </text>
                  </div>
                  <div className="mr-14 -mb-6">
                    <Image
                      src={"/assets/girl2.webp"}
                      alt="sa"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                {/* second box */}
                <div>
                  <div className="bg-[#212121]   items-center w-[500px]  ">
                    <div className="flex justify-center items-center flex-col pt-10">
                      <h1 className="text-white text-3xl font-bold">
                        GET 30% Off
                      </h1>
                      <div className="flex flex-col justify-center items-center pt-6 gap-2">
                        <text className="text-white">USE PROMO CODE</text>
                        <button className="mb-4 text-white font-bold bg-[#474747] px-11 py-2 rounded-md">
                          D I N E W E E K E N D S A L E{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2   ">
              {Data.map((elm) => (
                <div className={`  w-72  h-[406px] bg-[#EFE1C7]`}>
                  <div className="flex flex-col justify-center ml-5 ">
                    <h4 className="font-thick  text-lg pt-10">{elm.Text}</h4>
                    <div className="flex  gap-3 mt-2 ">
                      <text className="line-through text-xl">
                        {elm.Number2}
                      </text>
                      <text className="text-xl font-bold">{elm.Number}</text>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src={elm.Image} alt="sa" width={230} height={230} />
                  </div>
                </div>
              ))}
              {Data2.map((elm) => (
                <div className={`  w-72  h-[406px] bg-[#D7D7D9]`}>
                  <div className="flex flex-col justify-center ml-5 ">
                    <h4 className="font-thick  text-lg pt-10">{elm.Text}</h4>
                    <div className="flex  gap-3 mt-2 ">
                      <text className="line-through text-xl">
                        {elm.Number2}
                      </text>
                      <text className="text-xl font-bold">{elm.Number}</text>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src={elm.Image} alt="sa" width={230} height={230} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
