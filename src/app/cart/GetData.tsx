const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://ecom-59111.vercel.app";


export default async function getData() {
  
    try {
        const res = await fetch(`${BASE_URL}/api/cart`, {
          headers: {
            "Content-type": "application/json",
          },
          method: "GET",
          cache: "no-store",
        });
    
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
    
        return result;
      } catch (error) {
        console.log((error as { message: string }).message);
      }
}
