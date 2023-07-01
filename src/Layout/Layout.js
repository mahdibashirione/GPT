import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex overflow-hidden">
      <Navbar />
      <main className="w-full container">{children}</main>
    </div>
  );
};

export default Layout;
