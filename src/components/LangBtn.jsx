import React, { useContext, useEffect, useState } from "react";
import LangContext from "@/contexts/LangContext";

const LangBtn = () => {
  const [langChoose, setLangChoose] = useState(false);
  const { lang, setLang } = useContext(LangContext);

  const currentLang = () => {
    switch (lang) {
      case "en":
        return "us";
      case "pt":
        return "br";
      case "es":
        return "es";
      default:
        return "br";
    }
  };

  useEffect(() => {
    setLangChoose(false);
  }, [lang]);

  return (
    <div
      className=""
      onClick={() => {
        setLangChoose((prev) => !prev);
      }}
    >
      <div
        className="h-9 w-9 rounded-full border-2 border-zinc-700 dark:border-2 dark:border-zinc-200 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url(https://flagcdn.com/w160/${currentLang()}.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Options */}
      <div
        className={`absolute flex flex-col gap-2 mt-2 ${langChoose ? "" : "hidden"}`}
      >
        <div
          className={`${currentLang() === "br" ? "hidden" : ""} h-9 w-9 rounded-full border-2 border-zinc-700 dark:border-2 dark:border-zinc-200 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out`}
          style={{
            backgroundImage: `url(https://flagcdn.com/w160/br.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            setLang("pt");
          }}
        />
        <div
          className={`${currentLang() === "us" ? "hidden" : ""} h-9 w-9 rounded-full border-2 border-zinc-700 dark:border-2 dark:border-zinc-200 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out`}
          style={{
            backgroundImage: `url(https://flagcdn.com/w160/us.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            setLang("en");
          }}
        />

        <div
          className={`${currentLang() === "es" ? "hidden" : ""} h-9 w-9 rounded-full border-2 border-zinc-700 dark:border-2 dark:border-zinc-200 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out`}
          style={{
            backgroundImage: `url(https://flagcdn.com/w160/es.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            setLang("es");
          }}
        />
      </div>
    </div>
  );
};

export default LangBtn;
