import React, { useState } from "react";
import "../styles/global.css";

const SendBox = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setText("");
    }
  };

  return (
    <aside className="absolute bottom-0 left-0 w-full py-4 px-3">
      <div className="w-full max-w-[600px] pt-8 mx-auto z-10 relative">
        {/* New Dialog */}
        <button className="absolute top-0 right-0 min-w-fit flex font-semibold items-center active:scale-95 duration-150">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_250)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7484 2.49626C19.3048 2.05667 18.5861 2.05695 18.1429 2.49687L13.0313 7.57014L12.7989 7.33963C11.6857 7.931 10.5146 8.39626 9.26258 8.60329C7.75104 8.85325 6.22887 8.95542 4.69812 8.95542C4.26727 14.0854 8.29397 18.435 13.5016 17.9653L13.6834 17.6046C14.2614 16.4575 14.8237 14.7754 15.2345 13.4166C15.5222 12.465 15.7846 11.5068 16.0277 10.5432L15.8885 10.4051L21.0009 5.33105C21.4442 4.89093 21.4438 4.17738 21.0002 3.73757L19.7484 2.49626ZM14.0631 8.59395L14.8566 9.38126L19.7398 4.53475L18.946 3.74768L14.0631 8.59395ZM10.8268 9.7266L13.9033 12.779C14.1274 12.0268 14.3048 11.3769 14.4089 10.9847L12.5157 9.10626C12.1294 9.27871 11.5408 9.51816 10.8268 9.7266ZM13.412 14.3391L9.1297 10.0903C7.86528 10.2807 6.75732 10.3549 6.07826 10.3842C6.17148 13.827 9.3166 16.631 12.5574 16.5812C12.8506 15.9352 13.1438 15.1413 13.412 14.3391Z"
                className="fill-black dark:fill-white"
              />
            </g>
            <path
              d="M3.83333 13.8333L4.05841 14.4415L4.66667 14.6666L4.05841 14.8917L3.83333 15.4999L3.60826 14.8917L3 14.6666L3.60826 14.4415L3.83333 13.8333Z"
              fill="black"
            />
            <path
              d="M5.08333 15.5L5.64602 17.0206L7.16667 17.5833L5.64602 18.146L5.08333 19.6667L4.52064 18.146L3 17.5833L4.52064 17.0206L5.08333 15.5Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_1_250"
                x="0.666504"
                y="2.16675"
                width="24.6665"
                height="23.8333"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_250"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_250"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          New dialog
        </button>
        {/* Input */}
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="w-full pl-12 border border-gray-400 py-2 backdrop-blur bg-transparent rounded-md focus:border-blue-500 outline-none focus:ring-2 ring-blue-200 dark:ring-transparent pr-16"
            type="text"
            placeholder="Send a message "
          />
          <button className="absolute bottom-3 right-4">
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
        {/* Icons */}
        <svg
          className="w-5 h5 absolute left-4 bottom-3"
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
      </div>
    </aside>
  );
};

export default SendBox;
