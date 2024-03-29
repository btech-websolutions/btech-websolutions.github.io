import React, { useContext, useEffect, useState } from "react";
import LangContext from "@/contexts/LangContext";
import LangOpt from "./LangOpt";

const LangBtn = () => {
  const [langChoose, setLangChoose] = useState(false);
  const [showOptions, setShowOptions] = useState(false); // Estado para controlar a animação
  const { lang, setLang } = useContext(LangContext);

  const currentLang = () => {
    switch (lang) {
      case "en":
        return "us";
      case "pt":
        return "br";
      case "es":
        return "es";
      case "cn":
        return "cn";
      case "rs":
        return "rs";
    }
  };

  useEffect(() => {
    setLangChoose(false);
  }, [lang]);

  useEffect(() => {
    // Adicionando um pequeno delay para a animação, para dar tempo para a renderização
    const timeout = setTimeout(() => {
      setShowOptions(langChoose);
    }, 50);

    return () => clearTimeout(timeout);
  }, [langChoose]);

  return (
    <div className="relative">
      <div
        className="h-9 w-9 rounded-full border-2 border-zinc-700 dark:border-2 dark:border-zinc-200 cursor-pointer hover:scale-110 transition-all duration-700 ease-in-out z-20"
        style={{
          backgroundImage: `url(https://flagcdn.com/w160/${currentLang()}.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => {
          setLangChoose((prev) => !prev);
        }}
      />

      {/* Options */}
      <div
        className={`absolute flex flex-col gap-2 mt-2 ${showOptions ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"} transition-all duration-700 ease-in-out z-10`}
        style={{ top: "100%" }}
      >
        <LangOpt country="us" language="en" />
        <LangOpt country="br" language="pt" />
        <LangOpt country="es" language="es" />
        <LangOpt country="cn" language="cn" />
        <LangOpt country="rs" language="rs" />
      </div>
    </div>
  );
};

export default LangBtn;
