import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto bg-light-bg">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
