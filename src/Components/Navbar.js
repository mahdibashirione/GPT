import { Link } from "gatsby";
import React from "react";
import DropDown from "./DropDown";
import "../styles/global.css";
import ThemeChanger from "./ThemeChanger";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
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

  return (
    <header className="dark:text-white col-start-2 col-end-3 row-start-1 row-end-2 lg:left-auto mx-auto backdrop-blur-sm z-20 whitespace-nowrap py-2.5 px-3 w-full relative xl:border-r">
      <div className="flex container justify-between">
        <div className="flex items-center min-w-fit mr-12">
          <img src="../../logo.png" alt="logo" />
          <div className="text-sm leading-4 ml-2 md:text-base md:leading-5 select-none">
            <span>Standard plan</span>
            <p className="text-[#00A739] text-sm flex items-center gap-1">
              <span className="block w-2 h-2 bg-[#00A739] rounded-full"></span>
              Active 35 000 people
            </p>
          </div>
        </div>
        <ul className="hidden md:flex gap-4 min-w-fit">
          {option.map((item) => {
            return (
              <li key={item.id} className="flex items-center">
                <Link
                  to="/"
                  className={`${
                    item.title === "Upgrade Plan" && "text-[#D69D0B]"
                  } px-2 flex items-center gap-2 text-sm leading-5`}
                >
                  {item.title}
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeChanger />
          <Link to="/settings" className="text-xl mr-2 lg:hidden">
            <FiSettings />
          </Link>
          <DropDown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
