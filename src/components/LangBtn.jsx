import React, { useState } from "react";

const LangBtn = ({ country }) => {
  return (
    <div
      className="h-9 w-9 rounded-full border-2 border-zinc-700 dark:border-2 dark:border-zinc-200 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: `url(https://flagcdn.com/w160/br.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default LangBtn;
