import React, { useState } from "react";
import useToast from "../hooks/useToast";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const VersionChanger = () => {
  const options = [
    { id: 1, version: "3.5" },
    { id: 2, version: "4" },
  ];
  const [selectedVersion, setSelectedVersion] = useState("3.4");
  const [isOpen, setIsOpen] = useState(false);
  const { toastSuccess } = useToast();

  const handleCheangeVersion = (version) => {
    setSelectedVersion(version);
    toastSuccess(`Version to ${version}`);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mt-2">
      <button
        onClick={(e) => setIsOpen(!isOpen)}
        className={`dark:border-gray-500 w-full font-semibold flex items-center px-4 py-2 border rounded-lg justify-between duration-200 ${
          isOpen && "shadow"
        }`}
      >
        <p>Version GPT {selectedVersion}</p>
        <FiChevronDown
          className={`${isOpen && "rotate-180"} duration-300 text-xl`}
        />
      </button>
      <motion.ul
        initial={{ maxHeight: "0" }}
        animate={{ maxHeight: isOpen ? "100px" : "0" }}
        transition={{ duration: 0.1 }}
        className={`overflow-hidden absolute top-[calc(100%+8px)] rounded-lg dark:border-gray-500 ${
          isOpen && "divide-y shadow border"
        } w-full shadow duration-200`}
      >
        {options.map((version) => {
          return (
            <li key={version.id}>
              <button
                onClick={(e) => handleCheangeVersion(version.version)}
                className="p-2.5 text-sm w-full text-left"
              >
                Version {version.version}
              </button>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default VersionChanger;
