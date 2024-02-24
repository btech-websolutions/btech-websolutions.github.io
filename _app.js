import "@/styles/globals.css";
import AppProviderider from "@/contexts/AppProviderider";

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <AppProviderider>
        <Component {...pageProps} />
      </AppProviderider>
    </div>
  );
}
