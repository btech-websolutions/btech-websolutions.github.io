import Image from "next/image";
import ghIcon from "../../public/assets/header/ghIcon.svg";
import linkedinIcon from "../../public/assets/header/linkedinIcon.svg";
import twitterIcon from "../../public/assets/header/twitterIcon.svg";
import logo from "../../public/assets/header/logo.svg";
import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <header
      className="w-[100%] h-[100px] flex justify-between items-center p-10 sticky top-0 bg-[#191919]"
      style={{ zIndex: 100 }}
    >
      <a href="/">
        <Image src={logo} alt="Logo" />
      </a>

      <div className="flex">
        <div className="text-neutral-400 flex text-xl font-medium font-['DM Sans'] leading-relaxed gap-5">
          <ActiveLink title="Home" href={"/"} />

          <ActiveLink title="About" href={"/#about"} />

          <ActiveLink title="Tech Stack" href={"/#tech-stack"} />

          <ActiveLink title="Projects" href={"/#projects"} />

          <ActiveLink title="Contact" href={"/contact"} />
        </div>

        <div className="flex justify-between items-center gap-5 ml-20">
          <a href="https://github.com/BTech-Web-Solutions" target="_blank">
            <Image
              src={ghIcon}
              alt="GitHub"
              className="hover:scale-110 hover:animate-pulse"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/btech-web-solutions/"
            target="_blank"
          >
            <Image
              src={linkedinIcon}
              alt="LinkedIn"
              className="hover:scale-110 hover:animate-pulse"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
