import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/UserContext";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import CartProvider from "@/context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter()

  if(pathname == "/auth" || pathname == "/editPage"){
    return <AuthProvider> 
       <Component {...pageProps} />
     </AuthProvider>
  }else{

  return <AuthProvider>
          <CartProvider>
          <Layout>       
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </AuthProvider>
  }
}
