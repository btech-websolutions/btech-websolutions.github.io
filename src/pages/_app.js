import "@/styles/globals.css";
import Header from "@/components/Header";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLang, setCurrentLang] = useState(language);
  const [isDark, setIsDark] = useState(true);

  const handleLanguageChange = () => {
    const newLanguage = currentLang === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLang(newLanguage);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <Header setIsDark={setIsDark} country={handleLanguageChange} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
