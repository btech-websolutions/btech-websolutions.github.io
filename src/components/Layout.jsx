import React from "react";
import Header from "./Header";

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
