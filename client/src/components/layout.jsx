import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default Layout;
