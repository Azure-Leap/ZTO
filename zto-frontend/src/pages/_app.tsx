import "@/styles/globals.css";
import "@/styles/globals.scss"
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/UserContext";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter()
  console.log(pathname, "pathhh--------")

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
