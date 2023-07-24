import { client } from "../../../../sanity/lib/client";
import { PRoductcard } from "../../components/PRoductcard";
import { PRODUCTS } from "@/app/AllProducts/page";
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

  return (
    <>
        <PRoductcard data={res} />
    </>
  );
}
