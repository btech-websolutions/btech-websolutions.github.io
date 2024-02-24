import React, { useState } from "react";
import AppContext from "./appContext";

function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
