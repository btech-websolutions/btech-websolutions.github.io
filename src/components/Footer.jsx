import React from "react";
import "../lib/i18n";
import { useTranslation } from "react-i18next";
import ActiveLink from "./ActiveLink";
import logo from "../../public/assets/header/logo.svg";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-light-bg dark:bg-dark-bg py-8 px-5 border-t-2 md:border-t-0">
      <section className="container mx-auto">
        <div className="flex dark:text-zinc-400 justify-between items-center">
          <img src={logo.src} alt="Logo" className="h-24 w-24 ml-[-5px]" />
          <div>
            <div className="md:flex gap-10">
              <a href="https://wa.me/5522981556221" target="_blank">
                <div className="flex items-center hover:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer">
                  <i className="fa-brands fa-whatsapp text-2xl" />
                  <h1 className="ml-2">+55 22 9 8155-6221</h1>
                </div>
              </a>

              <div className="flex items-center">
                <i className="fa-solid fa-envelope text-2xl" />
                <h1 className="ml-2 ">btech-websolutions@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-b-zinc-700 mt-[-10px] mb-8" />

        <nav className="gap-2 font-[DM Sans] font-medium flex flex-col md:flex-row md:gap-12 md:font-light pb-14">
          <ActiveLink
            title={t("nav.home")}
            href={"/"}
            className="text-zinc-700 hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-200 "
          />
          <ActiveLink
            title={t("nav.about")}
            href={"/#about"}
            className="text-zinc-700 hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-200"
          />
          <ActiveLink
            title={t("nav.techStack")}
            href={"/#tech-stack"}
            className="text-zinc-700 hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-200"
          />
          <ActiveLink
            title={t("nav.projects")}
            href={"/#projects"}
            className="text-zinc-700 hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-200"
          />
          <ActiveLink
            title={t("nav.contact")}
            href={"/contact"}
            className="text-zinc-700 hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-200"
          />
        </nav>
        <br />
      </section>

      <section className="lg:hidden font-medium flex justify-center items-center mt-5 bg-[#d1d1d1cc] dark:bg-[#000000cc] w-[100vw] h-6 fixed bottom-0 left-0">
        <p className="text-zinc-950 dark:text-zinc-400 text-[14px]">
          &copy; {new Date().getFullYear()} {t("company")}
        </p>
      </section>
    </footer>
  );
}
