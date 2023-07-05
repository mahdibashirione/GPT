import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiSun, FiMoon, FiChevronDown } from "react-icons/fi";
import useToast from "../hooks/useToast";

const ThemeChanger = () => {
  const [theme, setTheme] = useState("Light");
  const { toastSuccess } = useToast();

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("theme-irgpt"));
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-irgpt", JSON.stringify(theme));
    theme === "Dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleChangeTheme = (themeSelect) => {
    if (theme !== themeSelect) {
      setTheme(themeSelect);
      toastSuccess(`change theme to ${themeSelect}`);
    }
  };

  function SunInactiveIcon() {
    return <FiSun className="text-lg" />;
  }
  function SunActiveIcon() {
    return <FiSun className="text-white text-lg" />;
  }
  function MoonInactiveIcon() {
    return <FiMoon className="text-lg" />;
  }
  function MoonActiveIcon() {
    return <FiMoon className="text-white text-lg" />;
  }

  return (
    <div className="flex items-center z-20">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md p-3 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:hover:bg-zinc-800 hover:bg-zinc-900/10 duration-200">
            {theme === "Light" ? (
              <FiSun className="text-xl" />
            ) : (
              <FiMoon className="text-xl" />
            )}
            <FiChevronDown />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {/* Light */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={(e) => handleChangeTheme("Light")}
                    className={`${
                      active
                        ? "bg-blue-500 text-white"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md p-2.5 pr-12 text-sm gap-2`}
                  >
                    {active ? (
                      <SunActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <SunInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Light
                  </button>
                )}
              </Menu.Item>
              {/* Dark */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={(e) => handleChangeTheme("Dark")}
                    className={`${
                      active
                        ? "bg-blue-500 text-white"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md p-2.5 pr-12 text-sm gap-2`}
                  >
                    {active ? (
                      <MoonActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoonInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Dark
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ThemeChanger;
