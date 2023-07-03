import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import useToast from "../hooks/useToast";

const ModeChanger = () => {
  const options = [
    {
      id: 1,
      title: "Creative mode",
      desc: "Creative mode could refer to a chatbot or AI language model designed to assist and inspire creativity. Such a chatbot or AI model might provide prompts, suggest ideas, or even generate content for creative projects.",
    },
    {
      id: 2,
      title: "Balanced mode",
      desc: "Balance mode generally refers to an AI chatbot or language model designed to strike a balance between providing helpful responses and maintaining appropriate boundaries with users.",
    },
    {
      id: 3,
      title: "Strict mode",
      desc: "Strict mode generally refers to an AI chatbot or language model that is designed to strictly adhere to a set of predefined rules or guidelines for responding to user queries.",
    },
  ];
  const { toastSuccess } = useToast();
  const [selectedMode, setSelectedMode] = useState("Balanced mode");

  const handleCheangeMode = (titleMode) => {
    if (selectedMode !== titleMode) {
      setSelectedMode(titleMode);
      toastSuccess(`cheange to ${titleMode}`);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold">Mode</h3>
      <ul className="flex flex-col gap-2 overflow-hidden p-2">
        {options.map((mode) => {
          return (
            <li key={mode.id}>
              <button
                onClick={(e) => handleCheangeMode(mode.title)}
                className={`border rounded-lg p-2 duration-200 ${
                  selectedMode === mode.title
                    ? "border-blue-500"
                    : "dark:border-gray-500"
                }`}
              >
                <div className="flex gap-3">
                  <span
                    className={`${
                      selectedMode === mode.title
                        ? "bg-blue-500 border-transparent"
                        : "border-[#636363]"
                    } border border-dashed rounded-full flex items-center justify-center w-6 h-6 duration-200`}
                  >
                    <FiCheck
                      className={`text-sm ${
                        selectedMode === mode.title ? "block" : "hidden"
                      } text-white`}
                    />
                  </span>
                  <h4 className="font-semibold">{mode.title}</h4>
                </div>
                <p className="text-left pl-8 text-sm text-gray-400">
                  {mode.desc}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModeChanger;
