import React, { useState } from "react";
import useToast from "../hooks/useToast";

const ModeChangerMini = () => {
  const options = [
    {
      id: 1,
      title: "Creative",
      desc: "Creative mode could refer to a chatbot or AI language model designed to assist and inspire creativity. Such a chatbot or AI model might provide prompts, suggest ideas, or even generate content for creative projects.",
    },
    {
      id: 2,
      title: "Balanced",
      desc: "Balance mode generally refers to an AI chatbot or language model designed to strike a balance between providing helpful responses and maintaining appropriate boundaries with users.",
    },
    {
      id: 3,
      title: "Strict",
      desc: "Strict mode generally refers to an AI chatbot or language model that is designed to strictly adhere to a set of predefined rules or guidelines for responding to user queries.",
    },
  ];
  const { toastSuccess } = useToast();
  const [selectedMode, setSelectedMode] = useState("Balanced");

  const handleCheangeMode = (titleMode) => {
    if (selectedMode !== titleMode) {
      setSelectedMode(titleMode);
      toastSuccess(`cheange to ${titleMode}`);
    }
  };

  return (
    <article>
      <h3 className="text-xl font-semibold">Mode</h3>
      <div className="flex items-center p-1 border dark:border-gray-500 rounded-lg mt-2">
        {options.map((mode) => {
          return (
            <button
              className={`p-2 rounded-lg flex-1 ${
                selectedMode === mode.title
                  ? "bg-blue-500 text-white"
                  : "text-sm"
              }`}
              onClick={(e) => handleCheangeMode(mode.title)}
              key={mode.id}
            >
              {mode.title}
            </button>
          );
        })}
      </div>
      <p className="text-sm text-gray-500 pl-2 mt-2">
        {selectedMode} mode :{" "}
        {options.map((mode) => {
          if (mode.title === selectedMode) return mode.desc;
        })}
      </p>
    </article>
  );
};

export default ModeChangerMini;
