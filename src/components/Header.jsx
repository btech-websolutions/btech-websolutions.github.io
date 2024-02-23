import { useState } from "react";
import Image from "next/image";
import ghIcon from "../../public/assets/header/ghIcon.svg";
import linkedinIcon from "../../public/assets/header/linkedinIcon.svg";
import menuIcon from "../../public/assets/header/menuIcon.svg";
import logo from "../../public/assets/header/logo.svg";
import ActiveLink from "./ActiveLink";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center pt-5 pb-5 pl-5 pr-5 sticky top-[-1px] bg-dark-bg z-20 mb-10 shadow-lg">
      <a href="/">
        <Image src={logo} alt="Logo" className="h-10 w-20 " />
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
        <div className="flex md:flex justify-between items-center gap-5 ml-auto">
          <a href="https://github.com/BTech-Web-Solutions" target="_blank">
            <Image src={ghIcon} alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/btech-web-solutions/"
            target="_blank"
          >
            <Image src={linkedinIcon} alt="LinkedIn" className="social-icon" />
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
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
}
