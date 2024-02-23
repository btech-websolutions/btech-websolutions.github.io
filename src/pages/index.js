import Image from "next/image";
import Header from "../components/Header";
import profilePhoto from "../../public/assets/header/profilePhoto.png";

export default function Home() {
  return (
    <main className="max-w-[1600px] mx-auto">
      <div className="md:flex justify-between items-center md:p-10">
        <h1 className="text-dark-solidHeading text-3xl font-bold font-['DM Sans'] leading-tight pl-5 pr-5 mb-4">
          Hi 👋, <br /> We are <br />
          <span className="text-gradient">BTech - Web Solutions</span> <br />
          We build things for web
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center ">
          <img
            src={profilePhoto.src}
            alt="Profile Photo"
            className="w-[215px] h-[215px] rounded-full object-cover z-10 relative top-2"
          />

          <div className="h-[230px] w-[230px] absolute bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] z-0 rounded-full" />
        </div>
      </div>
    </main>
  );
}
