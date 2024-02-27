import React, { useState } from "react";
import LangContext from "./LangContext";

function LangProvider({ children }) {
  const [lang, setLang] = useState("pt");

  const contextValue = {
    lang,
    setLang,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
}

export default LangProvider;
