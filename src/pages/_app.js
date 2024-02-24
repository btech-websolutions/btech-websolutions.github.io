import "@/styles/globals.css";
import Header from "@/components/Header";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={isDark ? "dark" : ""}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
