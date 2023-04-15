import { Inter } from "next/font/google";
import productApi from "@/api/productApi";
import ProductGrid from "@/components/products/ProductGrid";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <>
      <ProductGrid products={products} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await productApi.get("/products?limit=20");
    if (!data) return { notFound: true };
    return {
      props: {
        products: data,
      },
      revalidate: 3600,
    };
  } catch (e) {
    return { notFound: true };
  }
}
