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
