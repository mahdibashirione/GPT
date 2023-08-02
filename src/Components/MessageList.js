import React from "react";

const MessageList = ({ messages, loading }) => {
  return (
    <section className="pt-3 pr-3 pb-32 h-full overflow-y-scroll scrollbar-none">
      {messages.map((message, i) => {
        return (
          <div
            key={i}
            className={`w-full flex flex-col pb-2 ${
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
                message.role === "user" &&
                "bg-green-500 text-white rounded-tr-none"
              } ${
                message.role === "error" &&
                "ml-8 bg-red-500 rounded-tl-none text-white"
              } ${
                message.role === "assistant" &&
                "ml-8 bg-gray-200 rounded-tl-none"
              }`}
            >
              {message.content}
            </p>
          </div>
        );
      })}
      {loading && (
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img
              className="dark:bg-zinc-50 rounded-full"
              src="../../Frame177.svg"
            />
            <span className="text-[12px]">2.03 PM, 15 Nov</span>
          </div>
          <p className="w-fit p-2 rounded-md ml-8 bg-gray-300 rounded-tl-none">
            is Typing ...
          </p>
        </div>
      )}
    </section>
  );
};

export default MessageList;
