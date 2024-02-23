import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ActiveLink = ({ href, title }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

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
          color: inherit;
        }
        a::before {
          content: "";
          position: absolute;
          width: 0%;
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
        className={`md:text-text-neutral-400 ${isActive ? "md:text-neutral-200" : "md:text-neutral-600"} md:hover:text-neutral-200`}
      >
        {title}
      </a>
    </div>
  );
};

export default ActiveLink;
