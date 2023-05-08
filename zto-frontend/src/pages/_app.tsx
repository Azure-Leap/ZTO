import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/UserContext";
import Layout from "@/components/layout";
import Login from "./auth";
export default function App({ Component, pageProps }: AppProps) {
  return <AuthProvider>
       <Layout>       
          <Component {...pageProps} />
        </Layout>
        </AuthProvider>
}
