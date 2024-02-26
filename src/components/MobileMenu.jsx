import React from "react";
import { Sun, Moon } from "lucide-react";
import ActiveLink from "./ActiveLink";
import closeBtn from "../../public/assets/header/closeBtn.svg";
import Image from "next/image";
import logo from "../../public/assets/header/logo.svg";
import "../lib/i18n";
import { useTranslation } from "react-i18next";

const MobileMenu = ({ setIsOpen, setIsDark }) => {
  const { t } = useTranslation();
  return (
    <div className="md:hidden fixed top-[30px] left-2 right-2 bg-light-menubg dark:bg-dark-menubg rounded-[15px] pl-5 font-['dm sans'] font-medium text-light-menutext dark:text-dark-menutext z-20 mx-3">
      <div className="flex justify-between items-center py-4 pr-5">
        <Image src={logo} alt="Logo" />

        <Image
          src={closeBtn}
          alt="Close"
          className="w-8 h-8 outline-none focus:outline-none"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="flex-col text-xl font-medium font-['DM Sans'] leading-10 pb-10">
        <ActiveLink title={t("nav.home")} href={"/"} />
        <ActiveLink title={t("nav.about")} href={"/#about"} />
        <ActiveLink title={t("nav.techStack")} href={"/#tech-stack"} />
        <ActiveLink title={t("nav.projects")} href={"/#projects"} />
        <ActiveLink title={t("nav.contact")} href={"/contact"} />

        <div className="flex justify-between pr-8 items-center">
          <span className="text-neutral-200 flex items-center gap-2">
            {t("nav.theme")}
            <Sun
              className="hidden dark:block h-7 w-7 text-zinc-400 hover:text-zinc-200 mt-1.5"
              onClick={() => {
                setIsDark((prev) => !prev);
              }}
            />
            <Moon
              className="dark:hidden h-7 w-7 text-zinc-500 hover:text-zinc-200 mt-0.5"
              onClick={() => {
                setIsDark((prev) => !prev);
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
