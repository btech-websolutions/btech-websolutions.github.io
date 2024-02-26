import React, { useState } from "react";

const LangBtn = ({ country }) => {
  const [lang, setLang] = useState("br");

  const handleLang = () => {
    if (lang === "us") {
      setLang("br");
      country && country("br");
    } else {
      setLang("us");
      country && country("us");
    }
  };
  return (
    <div
      className="h-9 w-9 rounded-full border-2 border-zinc-700 dark:border-2 dark:border-zinc-200 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
      onClick={handleLang}
      style={{
        backgroundImage: `url(https://flagcdn.com/w40/${lang}.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default LangBtn;
