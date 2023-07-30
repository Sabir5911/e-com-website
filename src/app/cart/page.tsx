import { cart } from "../lib/drizzel";
import { cookies } from "next/dist/client/components/headers";
import { Cart } from "../components/cart";

import getData from "./GetData";


  export default async function page() {
  const data: cart[] = await getData();
  const cartdata = data.filter(
    (elm) => elm.user_id == cookies().get("user_id")?.value
  );


  return (
    <>
      <div className="mt-28">
        <h1 className="text-3xl  font-bold pb-10">Shopping Cart </h1>

        <Cart data={cartdata} />
      </div>
    </>
  );
}
