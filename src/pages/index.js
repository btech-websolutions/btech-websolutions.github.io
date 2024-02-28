import { useEffect } from "react";
import profilePhoto from "../../public/assets/header/profilePhoto.png";
import cssIcon from "../../public/assets/cssIcon.svg";
import gitIcon from "../../public/assets/gitIcon.svg";
import htmlIcon from "../../public/assets/htmlIcon.svg";
import jsIcon from "../../public/assets/jsIcon.svg";
import reactIcon from "../../public/assets/reactIcon.svg";
import tailwindIcon from "../../public/assets/tailwindIcon.svg";
import vscodeIcon from "../../public/assets/vscodeIcon.svg";
import "../lib/i18n";
import { useTranslation } from "react-i18next";
import Project from "@/components/Project";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    // Preload the images for faster loading
    const images = [
      profilePhoto,
      cssIcon,
      gitIcon,
      htmlIcon,
      jsIcon,
      reactIcon,
      tailwindIcon,
      vscodeIcon,
    ];
    images.forEach((image) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = image.src;
      link.as = "image";
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="justify-between items-center md:p-10 bg-light-bg dark:bg-dark-bg transition-all duration-500 ease-in-out">
      {/* Presentation Section */}
      <section className="mb-20 md:flex justify-between items-center pt-8 xl:container xl:mx-auto lg:px-36">
        <h1 className="text-light-solidHeading dark:text-dark-solidHeading text-[28px] font-bold font-['Poppins'] pl-5 pr-5 mb-4 leading-9 lg:text-[48px] lg:leading-tight">
          {t("hi")} <br /> {t("who")} <br />
          <span className="text-gradient">{t("company")}</span> <br />
          {t("desc")}
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center ">
          <img
            src={profilePhoto.src}
            alt="Profile Photo"
            className="w-[215px] h-[215px] rounded-full object-cover z-10 relative top-2 "
          />

          <div className="h-[230px] w-[230px] absolute bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] z-0 rounded-full" />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="pb-20">
        <h1 className="text-light-solidHeading dark:text-dark-solidHeading text-3xl font-bold font-['Poppins'] leading-tight pl-5 pr-5 mb-2 text-center">
          {t("techTitle")}
        </h1>

        <p className="text-light-p dark:text-dark-p text-xl font-normal font-['Poppins'] leading-tight pl-10 pr-10 mb-10 text-center">
          {t("techDesc")}
        </p>

        <div className="flex justify-center">
          <div className="tech-stack__icons gap-10 grid grid-cols-2 justify-center items-center lg:grid lg:grid-cols-6">
            <img src={htmlIcon.src} alt="HTML" />
            <img src={cssIcon.src} alt="CSS" />
            <img src={jsIcon.src} alt="JavaScript" />
            <img src={reactIcon.src} alt="React" />
            <i className="tf tf-nextjs text-zinc-800 dark:text-zinc-200 text-[100px] text-center tech-stack__icon" />
            <i className="tf tf-nodejs-b text-[#529F41] text-[80px] text-center tech-stack__icon" />
            <i className="tf tf-mysql text-[#04546C] text-[100px] text-center tech-stack__icon" />
            <img src={tailwindIcon.src} alt="Tailwind" />
            <i className="tf tf-mongodb-b text-[#529F41] text-[80px] text-center tech-stack__icon" />
            <img src={vscodeIcon.src} alt="VSCode" />
            <i className="tf tf-github text-zinc-800 dark:text-zinc-200 text-[80px] text-center tech-stack__icon" />
            <img src={gitIcon.src} alt="Git" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col items-center">
        <h1 className="text-light-solidHeading dark:text-dark-solidHeading text-3xl font-bold font-['Poppins'] leading-tight pl-5 pr-5 mb-2 text-center">
          {t("projectsTitle")}
        </h1>

        <p className="text-light-p dark:text-dark-p text-xl font-normal font-['Poppins'] leading-tight pl-10 pr-10 pb-10 text-center">
          {t("projectsDesc")}
        </p>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </div>
  );
}
