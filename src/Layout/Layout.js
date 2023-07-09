import React from "react";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-zinc-900 dark:text-white w-full">
      <div className="container">
        <Navbar />
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Layout;
