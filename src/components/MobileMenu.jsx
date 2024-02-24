import React from "react";
import ActiveLink from "./ActiveLink";
import closeBtn from "../../public/assets/header/closeBtn.svg";
import Image from "next/image";
import logo from "../../public/assets/header/logo.svg";
// import ThemeBtn from "./ThemeBtn";

const MobileMenu = ({ setIsOpen }) => {
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
        <ActiveLink title="Home" href={"/"} />
        <ActiveLink title="About" href={"/#about"} />
        <ActiveLink title="Tech Stack" href={"/#tech-stack"} />
        <ActiveLink title="Projects" href={"/#projects"} />
        <ActiveLink title="Contact" href={"/contact"} />

        <div className="flex justify-between pr-8 items-center">
          <span className="text-neutral-200">Theme: light</span>
          {/* <ThemeBtn /> */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
