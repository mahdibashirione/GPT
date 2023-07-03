import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import "../styles/global.css";
import ModeChanger from "./ModeChanger";
import { motion } from "framer-motion";
import VersionChanger from "./VersionChanger";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleResize() {
    window.innerWidth >= 1024 ? setIsOpen(true) : setIsOpen(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <nav
      className={`dark:border-gray-500 p-3 col-span-1 row-span-2 border-r relative duration-300 lg:w-[360px] dark:bg-zinc-900 dark:text-white ${
        isOpen ? "w-[280px]" : "w-4"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="overflow-y-scroll scrollbar-none max-h-full min-w-[255px] pb-[100px]"
      >
        <ModeChanger />
        <VersionChanger />
      </motion.div>
      <button
        className={`w-7 h-7 bg-zinc-900 text-white absolute top-1/2 -translate-y-1/2 -right-4 flex items-center justify-center rounded-md dark:border-gray-500 border border-transparent text-xl active:scale-95 duration-300 z-10 lg:hidden`}
        onClick={(e) => setIsOpen(!isOpen)}
      >
        <FiChevronRight className={`${isOpen && "rotate-180"}`} />
      </button>
    </nav>
  );
};

export default Sidebar;
