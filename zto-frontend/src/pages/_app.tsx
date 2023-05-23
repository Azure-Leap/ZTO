import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/UserContext";
import CartProvider from "@/context/CartContext";






export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
          <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );
}
