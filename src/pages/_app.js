import "@/styles/globals.css";
import Header from "@/components/Header";
import AppProvider from "@/contexts/appProvider";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  );
}
