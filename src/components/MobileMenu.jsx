import React from "react";
import ActiveLink from "./ActiveLink";
import closeBtn from "../../public/assets/header/closeBtn.svg";
import Image from "next/image";
import logo from "../../public/assets/header/logo.svg";

const MobileMenu = ({ setIsOpen }) => {
  return (
    <div className="md:hidden fixed top-[30px] left-2 right-2 bg-[#363636] rounded-[15px] pl-5 font-['dm sans'] font-medium text-[#CCCCCC]">
      <div className="flex justify-between items-center py-4 pr-5">
        <Image src={logo} alt="Logo" />

        <Image
          src={closeBtn}
          alt="Close"
          className="w-8 h-8 outline-none focus:outline-none"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="flex flex-col py-4 text-3xl gap-8">
        <ActiveLink title="Home" href={"/"} />
        <ActiveLink title="About" href={"/#about"} />
        <ActiveLink title="Tech Stack" href={"/#tech-stack"} />
        <ActiveLink title="Projects" href={"/#projects"} />
        <ActiveLink title="Contact" href={"/contact"} />
      </div>
    </div>
  );
};

export default MobileMenu;
