import React from "react";
import { Link } from "lucide-react";

const Project = ({ title, desc, techStack, liveLink, codeLink, coverLink }) => {
  return (
    <div className="md:w-[375px] mx-8 lg:mx-0 mb-10 font-[poppins] flex flex-col rounded-3xl overflow-hidden shadow-2xl shadow-neutral-400 dark:shadow-neutral-900 ">
      <div
        style={{
          backgroundImage: `url(${coverLink})`,
        }}
        className="h-56 bg-cover bg-center bg-no-repeat"
      />

      <div className="flex flex-col flex-grow gap-5 pt-12 py-10 px-8 dark:bg-dark-menubg">
        <h1 className="text-2xl font-medium text-zinc-500 dark:text-zinc-200">
          {title}
        </h1>

        <p className="text-md text-zinc-500 dark:text-zinc-300 font-light">
          {desc}
        </p>

        <p className="text-md font-normal dark:text-zinc-300">
          Tech stack: <span className="text-sm font-light">{techStack}</span>
        </p>

        <section className="flex justify-between dark:text-white items-center">
          <a
            href={liveLink}
            target="_blank"
            className={liveLink === "#" ? "hidden" : ""}
          >
            <div className="flex items-center gap-2 hover:text-zinc-400 dark:hover:text-zinc-400">
              <Link className=" text-4xl text-center" />
              <u>Live Preview</u>
            </div>
          </a>

          <a
            href={codeLink}
            target="_blank"
            className={codeLink === "#" ? "hidden" : ""}
          >
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
