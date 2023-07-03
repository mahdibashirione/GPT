import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import "../styles/global.css";
import ModeCheanger from "./ModeCheanger";
import VersionCheanger from "./versionCheanger";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`p-3 col-span-1 row-span-2 border-r relative duration-300 lg:w-[360px] ${
        isOpen ? "w-[280px]" : "w-4"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="overflow-y-scroll scrollbar-none max-h-full min-w-[255px] pb-[100px]"
      >
        <ModeCheanger />
        <VersionCheanger />
      </motion.div>
      <button
        className={`w-7 h-7 bg-zinc-900 text-white absolute top-1/2 -translate-y-1/2 -right-4 flex items-center justify-center rounded-md text-xl active:scale-95 duration-300 z-10 lg:hidden`}
        onClick={(e) => setIsOpen(!isOpen)}
      >
        <FiChevronRight className={`${isOpen && "rotate-180"}`} />
      </button>
    </nav>
  );
};

export default Sidebar;
