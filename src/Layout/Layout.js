import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-zinc-900 dark:text-white h-screen w-full grid overflow-hidden grid-rows-[69px_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)] max-w-[1600px] grid-cols-1 mx-auto">
      <Navbar />
      <Sidebar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
