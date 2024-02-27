import React, { useState } from "react";
import LangContext from "./LangContext";

function LangProvider({ children }) {
  const [lang, setLang] = useState("br");

  const contextValue = {
    lang,
    setLang,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
}

export default LangProvider;
