import Layout from "@/components/layouts/Layout";
import { CartProvider } from "@/context/cart/CartProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
