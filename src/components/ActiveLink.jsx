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
        className={`text-text-neutral-400 ${isActive ? "text-neutral-200" : "text-neutral-600"} hover:text-neutral-200`}
      >
        {title}
      </a>
    </div>
  );
};

export default ActiveLink;
