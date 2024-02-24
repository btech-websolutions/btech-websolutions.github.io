import Image from "next/image";
import Header from "@/components/Header";
import profilePhoto from "../../public/assets/header/profilePhoto.png";
import bootstrapIcon from "../../public/assets/bootstrapIcon.svg";
import cssIcon from "../../public/assets/cssIcon.svg";
import githubIcon from "../../public/assets/githubIcon.svg";
import gitIcon from "../../public/assets/gitIcon.svg";
import htmlIcon from "../../public/assets/htmlIcon.svg";
import jsIcon from "../../public/assets/jsIcon.svg";
import nextjsIcon from "../../public/assets/nextjsIcon.svg";
import reactIcon from "../../public/assets/reactIcon.svg";
import reduxIcon from "../../public/assets/reduxIcon.svg";
import sassIcon from "../../public/assets/sassIcon.svg";
import tailwindIcon from "../../public/assets/tailwindIcon.svg";
import vscodeIcon from "../../public/assets/vscodeIcon.svg";

export default function Home() {
  return (
    <main className="max-w-[1600px] mx-auto">
      <Header />
      <div className=" justify-between items-center md:p-10">
        {/* Presentation Section */}
        <section className="mb-20 md:flex justify-between items-center">
          <h1 className="text-dark-solidHeading text-[28px] font-bold font-['Poppins'] pl-5 pr-5 mb-4 leading-9 lg:text-[48px] lg:leading-tight">
            Hi 👋, <br /> We are <br />
            <span className="text-gradient">BTech - Web Solutions</span> <br />
            We build things for web
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

        {/* Tech Stach Section */}
        <section className="flex flex-col mb-20 md:flex justify-between items-center">
          <h1 className="text-dark-solidHeading text-3xl font-bold font-['Poppins'] leading-tight pl-5 pr-5 mb-2 text-center">
            Our Tech Stack
          </h1>

          <p className="text-dark-p text-xl font-normal font-['Poppins'] leading-tight pl-10 pr-10 mb-10 text-center">
            Technologies we’ve been working with recently
          </p>

          <div className="flex justify-center">
            <div className="tech-stack__icons gap-10 grid grid-cols-2 justify-center items-center lg:grid lg:grid-cols-6">
              <Image src={htmlIcon} alt="HTML" />
              <Image src={cssIcon} alt="CSS" />
              <Image src={jsIcon} alt="JavaScript" />
              <Image src={reactIcon} alt="React" />
              <Image src={nextjsIcon} alt="Next.js" />
              <Image src={reduxIcon} alt="Redux" />
              <Image src={sassIcon} alt="Sass" />
              <Image src={tailwindIcon} alt="Tailwind" />
              <Image src={bootstrapIcon} alt="Bootstrap" />
              <Image src={vscodeIcon} alt="VSCode" />
              <Image src={githubIcon} alt="GitHub" />
              <Image src={gitIcon} alt="Git" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col mb-20 md:flex justify-between items-center">
          <h1 className="text-dark-solidHeading text-3xl font-bold font-['Poppins'] leading-tight pl-5 pr-5 mb-2 text-center">
            Projects
          </h1>

          <p className="text-dark-p text-xl font-normal font-['Poppins'] leading-tight pl-10 pr-10 mb-10 text-center">
            Things we’ve built so far
          </p>
        </section>
      </div>
    </main>
  );
}
