import "@/styles/globals.css";
import Layout from "@/components/Layout";
import LangProvider from "@/contexts/LangProvider";

export default function App({ Component, pageProps }) {
  return (
    <LangProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LangProvider>
  );
}
