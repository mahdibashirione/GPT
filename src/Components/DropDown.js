import { Link } from "gatsby";
import React, { useState } from "react";
import { motion } from "framer-motion";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const option = [
    {
      id: 1,
      title: "Upgrade Plan",
      icon: (
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.22241 13.4888L5.5113 20.5999L14.7557 10.6443L9.77796 7.7999L10.4891 1.3999L1.24463 11.3555L6.22241 13.4888Z"
            stroke="#D69D0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Help",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9989 15.7999V15.8421M8.5999 8.04523C8.5999 6.69471 9.67442 5.5999 10.9999 5.5999C12.3254 5.5999 13.3999 6.69471 13.3999 8.04523C13.3999 9.39575 12.3254 10.4906 10.9999 10.4906C10.9999 10.4906 10.9989 11.2204 10.9989 12.1208M20.5999 10.9999C20.5999 16.3018 16.3018 20.5999 10.9999 20.5999C5.69797 20.5999 1.3999 16.3018 1.3999 10.9999C1.3999 5.69797 5.69797 1.3999 10.9999 1.3999C16.3018 1.3999 20.5999 5.69797 20.5999 10.9999Z"
            stroke="#767676"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "API",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.37851 8.1905L3.14505 10.424C2.31092 11.2581 1.83124 12.3931 1.84001 13.5859C1.84877 14.7787 2.31796 15.9206 3.19167 16.7673C4.03836 17.641 5.18048 18.1102 6.3731 18.119C7.59293 18.1279 8.70103 17.6753 9.53521 16.8411L11.7687 14.6077M14.6215 11.8094L16.8549 9.57597C17.6891 8.74183 18.1688 7.60687 18.16 6.41406C18.1512 5.22124 17.682 4.07936 16.8083 3.23262C15.9618 2.38614 14.8199 1.91693 13.6271 1.90816C12.4343 1.8994 11.2992 2.35185 10.465 3.18601L8.23153 5.41946M6.6131 13.3271L13.3135 6.62676"
            stroke="#767676"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const handleOpenDropDown = () => {
    setIsOpen(true);
  };
  const handleCluseDropDown = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden relative min-w-fit flex items-center">
      <button
        onClick={isOpen ? handleCluseDropDown : handleOpenDropDown}
        className="flex flex-col gap-1.5 overflow-hidden"
      >
        <span
          className={`w-5 h-[2px] block bg-zinc-900 duration-200 ${
            isOpen && "translate-y-[8px] rotate-45"
          }`}
        ></span>
        <span
          className={`w-5 h-[2px] block bg-zinc-900 duration-200 ${
            isOpen && "-translate-x-6"
          }`}
        ></span>
        <span
          className={`w-5 h-[2px] block bg-zinc-900 duration-200 ${
            isOpen && "-translate-y-[8px] -rotate-45"
          }`}
        ></span>
      </button>
      <motion.ul
        initial={{ maxWidth: "0", maxHeight: "0" }}
        animate={
          isOpen
            ? { maxWidth: "150px", maxHeight: "150px" }
            : { maxWidth: "0", maxHeight: "0" }
        }
        className={`absolute top-full right-0 bg-white shadow-zinc-400 shadow rounded overflow-hidden`}
      >
        {option.reverse().map((item) => {
          return (
            <li key={item.id} className="flex items-center">
              <Link
                to="/"
                onClick={handleCluseDropDown}
                className={`${
                  item.title === "Upgrade Plan" && "text-[#D69D0B]"
                } px-4 py-2 flex items-center gap-2 text-sm leading-6 w-full justify-end hover:bg-gray-100`}
              >
                {item.title}
                {item.icon}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default DropDown;
