import { Inter } from "next/font/google";
import productApi from "@/api/productApi";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "@/context/products/ProductContext";
import { ADD_PRODUCTS } from "@/context/products/productType";
import ProductGrid from "@/components/products/ProductGrid";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { products, dispatch } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Add products to product context, to change title and size font title in client side.
   */
  useEffect(() => {
    const fechData = async () => {
      const { data } = await productApi.get("/products?limit=20");
      const productWithTitle = data.map((product) => ({
        ...product,
        titleSize: 12,
      }));
      if (productWithTitle) {
        dispatch({
          type: ADD_PRODUCTS,
          payload: productWithTitle,
        });
      }
    };
    fechData();
  }, [dispatch]);

  return (
    <>
      <ProductGrid products={products} />
    </>
  );
}


