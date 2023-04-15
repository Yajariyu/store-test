import Layout from "@/components/layouts/Layout";
import { CartProvider } from "@/context/cart/CartProvider";
import { ProductProvider } from "@/context/products/ProductsProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ProductProvider>
  );
}
