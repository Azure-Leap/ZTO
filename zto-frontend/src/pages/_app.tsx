import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/UserContext";
import Layout from "@/components/layout";
export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        </Layout>
}
