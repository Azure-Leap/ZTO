import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/UserContext";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import CartProvider from "@/context/CartContext";






export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}
