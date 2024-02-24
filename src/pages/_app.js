import "@/styles/globals.css";

import AppProvider from "@/contexts/appProvider";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
