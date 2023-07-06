import React from "react";

const MessageList = ({ messages }) => {
  return (
    <section className="pt-3 pr-3">
      {messages.map((message, i) => {
        return (
          <div
            key={i}
            className={`w-full flex flex-col ${
              message.role === "user" ? "items-end text-right" : "text-left"
            }`}
          >
            <div className="flex items-center gap-2">
              {message.role !== "user" && (
                <img
                  className="dark:bg-zinc-50 rounded-full"
                  src="../../Frame177.svg"
                />
              )}
              <span className="text-[12px]">2.03 PM, 15 Nov</span>
              {message.role === "user" && <p>You</p>}
            </div>
            <p
              className={`w-fit p-2 rounded-md ${
                message.role === "user"
                  ? "bg-green-500 text-white rounded-tr-none"
                  : "ml-8 bg-gray-200 dark:bg-zinc-800 rounded-tl-none"
              }`}
            >
              {message.content}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default MessageList;
