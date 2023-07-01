import React from "react";
import Navbar from "../Components/Navbar";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex overflow-hidden">
      <Navbar />
      <main className="w-full container">{children}</main>
    </div>
  );
};

export default Layout;
