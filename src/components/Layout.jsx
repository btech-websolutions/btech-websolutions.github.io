import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, className }) => {
  const [isDark, setIsDark] = useState(true);

  const {
    t,
    i18n: { changeLang, language },
  } = useTranslation();

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
