import { useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";

import ActiveLink from "./ActiveLink";
import logo from "../../public/assets/header/logo.svg";
import MobileMenu from "./MobileMenu";
import "../lib/i18n";
import { useTranslation } from "react-i18next";
import LangBtn from "./LangBtn";

export default function Header({ setIsDark }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-light-bg dark:bg-dark-bg shadow-lg sticky top-0 z-20 transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center py-2 px-8">
        <img
          src={logo.src}
          alt="Logo"
          onClick={() => (window.location.href = "/")}
          className="h-16 w-16 lg:h-24 lg:w-24 cursor-pointer"
        />

        <div className="flex gap-10 md:gap-5 items-center">
          {" "}
          <nav className="hidden md:flex gap-10 text-light-navtext font-[DM Sans] font-medium">
            <ActiveLink title={t("nav.home")} href={"/"} />
            <ActiveLink title={t("nav.about")} href={"/#about"} />
            <ActiveLink title={t("nav.techStack")} href={"/#tech-stack"} />
            <ActiveLink title={t("nav.projects")} href={"/#projects"} />
            <ActiveLink title={t("nav.contact")} href={"/contact"} />
          </nav>
          {/* Social icons */}
          <div className="flex gap-8 md:gap-4 items-center">
            <a href="https://github.com/BTech-Web-Solutions" target="_blank">
              <i className="tf tf-github text-zinc-800 dark:text-zinc-200 text-[40px] text-center tech-stack__icon flex" />
            </a>
            <a
              href="https://www.linkedin.com/company/btech-web-solutions/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin  text-zinc-800 dark:text-zinc-200 text-[30px] text-center tech-stack__icon flex mt-1" />
            </a>

            <LangBtn />

            <div className="hidden lg:block">
              <Sun
                className="hidden dark:block h-7 w-7 text-white hover:text-zinc-400"
                onClick={() => {
                  setIsDark((prev) => !prev);
                }}
              />
              <Moon
                className="dark:hidden h-7 w-7 text-zinc-950 hover:text-zinc-500"
                onClick={() => {
                  setIsDark((prev) => !prev);
                }}
              />
            </div>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none focus:outline-none"
          >
            {/* <img src={menuIcon.src} alt="Menu" className="w-8 h-8" /> */}
            <Menu className="w-10 h-10 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200" />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && <MobileMenu setIsDark={setIsDark} setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
}
