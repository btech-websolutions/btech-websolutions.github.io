import { useState } from "react";
import Image from "next/image";
import ghIcon from "../../public/assets/header/ghIcon.svg";
import linkedinIcon from "../../public/assets/header/linkedinIcon.svg";
import menuIcon from "../../public/assets/header/menuIcon.svg";
import logo from "../../public/assets/header/logo.svg";
import ActiveLink from "./ActiveLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center pt-10 pb-10 pl-5 pr-5">
      <a href="/">
        <Image src={logo} alt="Logo" />
      </a>

      <div className="flex gap-20">
        {/* Menu for desktop (md and larger) */}
        <div className="hidden md:flex text-neutral-400 text-xl font-medium font-['DM Sans'] leading-relaxed gap-6">
          <ActiveLink title="Home" href={"/"} />
          <ActiveLink title="About" href={"/#about"} />
          <ActiveLink title="Tech Stack" href={"/#tech-stack"} />
          <ActiveLink title="Projects" href={"/#projects"} />
          <ActiveLink title="Contact" href={"/contact"} />
        </div>
        {/* Social icons */}
        <div className="hidden md:flex justify-between items-center gap-5 ml-auto">
          <a href="https://github.com/BTech-Web-Solutions" target="_blank">
            <Image
              src={ghIcon}
              alt="GitHub"
              className="rounded-full hover:scale-110 hover:animate-pulse"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/btech-web-solutions/"
            target="_blank"
          >
            <Image
              src={linkedinIcon}
              alt="LinkedIn"
              className="rounded-full hover:scale-110 hover:animate-pulse"
            />
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none focus:outline-none"
          >
            <Image src={menuIcon} alt="Menu" className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="md:hidden absolute top-[100px] left-0 right-0 bg-[#191919] z-50 shadow-2xl rounded-b-lg rounded-t-none"
            style={{
              borderRadius: "50px",
              backgroundColor: "#363636",
            }}
          >
            <div className="flex flex-col items-center py-4 text-3xl gap-8">
              <ActiveLink title="Home" href={"/"} />
              <ActiveLink title="About" href={"/#about"} />
              <ActiveLink title="Tech Stack" href={"/#tech-stack"} />
              <ActiveLink title="Projects" href={"/#projects"} />
              <ActiveLink title="Contact" href={"/contact"} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
