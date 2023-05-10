import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/UserContext";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter()

  if(pathname === "/auth"){
    return <AuthProvider> 
       <Component {...pageProps} />
     </AuthProvider>
  }
  return <AuthProvider>
       <Layout>       
          <Component {...pageProps} />
        </Layout>
        </AuthProvider>
}
