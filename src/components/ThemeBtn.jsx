import React, { useContext, useState } from "react";
import sunIcon from "../../public/assets/header/sunIcon.svg";
import moonIcon from "../../public/assets/header/moonIcon.svg";
import Image from "next/image";

import AppContext from "../contexts/appContext";

const ThemeBtn = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex gap-2 items-center" onClick={toggleTheme}>
      <Image
        src={sunIcon}
        alt="Sun"
        className={`w-6 h-6 ${theme === "light" ? "" : "opacity-50"}`}
      />

      <div className="w-12 h-6 relative">
        <div
          className={`w-12 h-6 left-0 top-0 absolute bg-${theme}-solidHeading rounded-3xl shadow-inner ${theme === "light" ? "opacity-100" : "opacity-100"}`}
          style={{ transition: "opacity 0.3s" }}
        />
        <div
          className={`w-4 h-4 left-[5px] top-[4px] absolute bg-neutral-400 rounded-3xl shadow-lg ${theme === "dark" ? "transform translate-x-[22px]" : ""}`}
          style={{ transition: "transform 0.3s" }}
        />
      </div>

      <Image
        src={moonIcon}
        alt="Moon"
        className={`w-6 h-6 ${theme === "dark" ? "" : "opacity-50"}`}
      />
    </div>
  );
};

export default ThemeBtn;
