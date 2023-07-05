import React, { useState } from "react";
import useToast from "../hooks/useToast";

const VersionChanger = () => {
  const options = [
    { id: 1, version: "3.4" },
    { id: 2, version: "4" },
    { id: 3, version: "5" },
  ];
  const [selectedVersion, setSelectedVersion] = useState("3.4");
  const { toastSuccess } = useToast();

  const handleCheangeVersion = (version) => {
    if (selectedVersion !== version) {
      setSelectedVersion(version);
      toastSuccess(`Version to ${version}`);
    }
  };

  return (
    <article className="mt-4">
      <h3 className="text-xl lg:text-2xl font-bold">Version</h3>
      <div className="flex items-center mt-1 p-1 border dark:border-gray-500 border-gray-300 rounded-lg">
        {options.map((mode) => {
          return (
            <button
              className={`p-2 rounded-lg flex-1 ${
                selectedVersion === mode.version
                  ? "bg-blue-500 text-white"
                  : "text-sm"
              }`}
              onClick={(e) => handleCheangeVersion(mode.version)}
              key={mode.id}
            >
              {mode.version}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default VersionChanger;
