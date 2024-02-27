import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import LangContext from "@/contexts/LangContext";
import { use } from "i18next";

const Layout = ({ children, className }) => {
  const [isDark, setIsDark] = useState(true);
  const { lang, setLang } = useContext(LangContext);

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  return (
    <div className={className}>
      <div className={isDark ? "dark" : ""}>
        <Header setIsDark={setIsDark} />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
