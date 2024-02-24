import { useState } from "react";
import ActiveLink from "./ActiveLink";
import logo from "../../public/assets/header/logo.svg";
import ghIcon from "../../public/assets/header/ghIcon.svg";
import linkedinIcon from "../../public/assets/header/linkedinIcon.svg";
import menuIcon from "../../public/assets/header/menuIcon.svg";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-light-bg dark:bg-dark-bg shadow-lg sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center p-8">
        <img
          src={logo.src}
          alt="Logo"
          onClick={() => (window.location.href = "/")}
          className="h-16 w-16 cursor-pointer"
        />

        <nav className="hidden md:flex gap-10 text-light-navtext font-[DM Sans] font-medium">
          <ActiveLink title="Home" href={"/"} />
          <ActiveLink title="About" href={"/#about"} />
          <ActiveLink title="Tech Stack" href={"/#tech-stack"} />
          <ActiveLink title="Projects" href={"/#projects"} />
          <ActiveLink title="Contact" href={"/contact"} />
        </nav>

        {/* Social icons */}
        <div className="flex gap-8">
          <a href="https://github.com/BTech-Web-Solutions" target="_blank">
            <img
              src={ghIcon.src}
              alt="GitHub"
              className="rounded-full hover:scale-110 hover:animate-pulse"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/btech-web-solutions/"
            target="_blank"
          >
            <img
              src={linkedinIcon.src}
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
            <img src={menuIcon.src} alt="Menu" className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
}
