import React from "react";
import "../styles/global.css";
import ModeChanger from "./ModeChanger";
import VersionChanger from "./VersionChanger";

const Sidebar = () => {
  return (
    <nav
      className={`dark:border-gray-500 p-4 col-span-1 row-span-2 border-r relative duration-300 dark:bg-zinc-900 dark:text-white hidden lg:flex`}
    >
      <div className="overflow-y-scroll scrollbar-none max-h-full min-w-[255px] pb-[100px]">
        <ModeChanger />
        <VersionChanger />
      </div>
    </nav>
  );
};

export default Sidebar;
