import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/UserContext";
import CartProvider from "@/context/CartContext";
import ThemeProvider from "@/components/theme";






export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
    <AuthProvider>
      <CartProvider>
          <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
    </ThemeProvider>
  );
}
