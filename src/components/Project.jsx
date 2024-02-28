import React from "react";
import { Link } from "lucide-react";

const Project = ({ title, desc, techStack, liveLink, codeLink }) => {
  return (
    <div className="md:w-[375px] mx-8 lg:mx-0 mb-10 font-[poppins] flex flex-col rounded-3xl overflow-hidden shadow-2xl shadow-neutral-400 dark:shadow-neutral-900 ">
      <div
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1709075919~exp=1709076519~hmac=c9d9fbbb34005e544cd147f04e8518448d54f3fb4bb950bd51d2abf1fffc902c")`,
        }}
        className="h-56 bg-cover bg-center bg-no-repeat"
      />

      <div className="flex flex-col gap-5 pt-12 py-10 px-8 dark:bg-dark-menubg">
        <h1 className="text-2xl font-medium text-zinc-500 dark:text-zinc-200">
          Project Tile goes here
        </h1>

        <p className="text-md text-zinc-500 dark:text-zinc-300 font-light">
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </p>

        <p className="text-md font-normal dark:text-zinc-300">
          Tech stack:{" "}
          <span className="text-sm font-light">
            HTML , JavaScript, SASS, React
          </span>
        </p>

        <section className="flex justify-between dark:text-white items-center">
          <a href="https://www.github.com/" target="_blank">
            <div className="flex items-center gap-2 hover:text-zinc-400 dark:hover:text-zinc-400">
              <Link className=" text-4xl text-center" />
              <u>Live Preview</u>
            </div>
          </a>

          <a href="https://www.github.com/" target="_blank">
            <div className="flex items-center gap-2 hover:text-zinc-400 dark:hover:text-zinc-400">
              <i className="tf tf-github text-4xl text-center" />
              <u>View Code</u>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Project;
