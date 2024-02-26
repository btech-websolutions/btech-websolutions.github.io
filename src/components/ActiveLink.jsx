import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ActiveLink = ({ href, title }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(router.pathname === href);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  useEffect(() => {
    setIsActive(router.pathname === href);
  }, [router.pathname, href]);

  return (
    <div>
      <style jsx>{`
        a {
          position: relative;
          text-decoration: none;
        }

        a::before {
          content: "";
          position: absolute;
          width: ${isActive ? "100%" : "0"};
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: currentColor;
          transition:
            width 0.3s ease-in-out,
            left 0.3s ease-in-out;
          transform: translateX(-50%);
        }

        a:hover::before {
          width: 100%;
          left: 1;
        }
      `}</style>
      <a
        href={href}
        onClick={handleClick}
        className={
          isActive
            ? "active text-zinc-100 md:text-zinc-800 dark:md:text-zinc-100"
            : "text-zinc-500 hover:text-zinc-200 md:hover:text-zinc-800 dark:md:hover:text-zinc-100"
        }
      >
        {title}
      </a>
    </div>
  );
};

export default ActiveLink;
