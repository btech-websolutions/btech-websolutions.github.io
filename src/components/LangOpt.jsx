import React, { useContext } from "react";
import LangContext from "@/contexts/LangContext";

const LangOpt = ({ country, language }) => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <>
      <div
        className={`${lang === language ? "hidden" : ""} h-9 w-9 rounded-full border-2 border-zinc-700 dark:border-2 dark:border-zinc-200 cursor-pointer hover:scale-110 transition-all duration-700 ease-in-out`}
        style={{
          backgroundImage: `url(https://flagcdn.com/w160/${country}.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => {
          setLang(language);
        }}
      />
    </>
  );
};

export default LangOpt;
