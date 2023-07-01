import React, { useState } from "react";
import "../styles/global.css";

const SendBox = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setText("");
    } else {
      alert("Ops!!");
    }
  };

  return (
    <aside className="fixed bottom-0 left-0 w-full p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] mx-auto z-10 relative"
      >
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="w-full pl-12 border border-gray-400 py-2 backdrop-blur bg-transparent rounded-md focus:border-blue-500 outline-none focus:ring-2 ring-blue-200"
          type="text"
          placeholder="Send a message "
        />
        <svg
          className="w-5 h5 absolute top-1/2 left-4 -translate-y-1/2"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9152 10.201L10.3101 16.8061C8.51233 18.6038 5.81613 18.8161 3.98318 16.9832C2.18541 15.1854 2.41906 12.5809 4.25201 10.748L11.6768 3.32315C12.8132 2.18679 14.6426 2.18679 15.779 3.32315C16.9154 4.45951 16.9154 6.28895 15.779 7.42531L8.22379 14.9805C7.6574 15.5469 6.7391 15.5469 6.17272 14.9805C5.60633 14.4141 5.60633 13.4958 6.17272 12.9294L12.9082 6.19396"
            stroke="#919191"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-10"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.66492 9.31428C3.88644 10.8364 4.64857 12.2278 5.81187 13.2341C6.97518 14.2403 8.46188 14.7941 10 14.7941M10 14.7941C11.5381 14.7941 13.0248 14.2403 14.1881 13.2341C15.3514 12.2278 16.1136 10.8364 16.3351 9.31428M10 14.7941V18M10.0009 2C9.27347 2 8.57581 2.28898 8.06142 2.80336C7.54704 3.31775 7.25806 4.01541 7.25806 4.74286V8.4C7.25806 9.12745 7.54704 9.82511 8.06142 10.3395C8.57581 10.8539 9.27347 11.1429 10.0009 11.1429C10.7284 11.1429 11.426 10.8539 11.9404 10.3395C12.4548 9.82511 12.7438 9.12745 12.7438 8.4V4.74286C12.7438 4.01541 12.4548 3.31775 11.9404 2.80336C11.426 2.28898 10.7284 2 10.0009 2Z"
            stroke="#919191"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <button className="absolute top-1/2 -translate-y-1/2 right-4">
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.56322 7.8854C2.02122 8.1129 1.6848 8.5179 1.67972 9.09123C1.67622 9.49206 1.94672 10.0304 2.48872 10.2504C2.71197 10.3412 5.84655 10.7629 5.84655 10.7629C5.84655 10.7629 6.67622 13.3854 6.97522 14.3071C7.0618 14.5737 7.11114 14.7046 7.30114 14.8787C7.62347 15.1737 8.16839 15.0813 8.40405 14.8446C9.02755 14.2196 10.0131 13.2554 10.0131 13.2554L10.4278 13.5929C10.4278 13.5929 12.2696 15.0621 13.2763 15.7537C13.8691 16.1612 14.2805 16.5862 14.9476 16.5887C15.2875 16.5904 15.8326 16.4212 16.1929 16.0087C16.431 15.7362 16.5837 15.3004 16.6428 14.9096C16.7771 14.0221 18.3531 4.42541 18.3464 4.08957C18.3357 3.55374 17.885 3.25207 17.5103 3.2554C17.275 3.2579 17.0811 3.32624 16.6496 3.45791C13.3117 4.47708 2.7843 7.7929 2.56322 7.8854ZM15.0131 5.7554C15.0131 5.7554 10.6147 9.58374 8.85714 11.3454C8.29405 11.9096 8.2543 12.8779 8.2543 12.8779L7.34581 9.97123L15.0131 5.7554Z"
              className={`${text !== "" ? "fill-blue-500" : "fill-gray-500"}`}
            />
          </svg>
        </button>
      </form>
    </aside>
  );
};

export default SendBox;
