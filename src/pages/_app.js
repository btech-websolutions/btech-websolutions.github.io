import "@/styles/globals.css";
import AppProvider from "@/contexts/appProvider";

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}
