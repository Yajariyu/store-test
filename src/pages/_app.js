import Layout from "@/components/layouts/Layout";
import { ProductProvider } from "@/context/products/ProductsProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}
