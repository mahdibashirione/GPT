import React from "react";
import "../styles/global.css";

const Welcome = () => {
  const options = [
    {
      id: 1,
      title: "Examples",
      desc: "Explain quantum computing in simple terms →",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="#F8F8F8" />
          <path
            d="M17 15V19V15ZM15 17H19H15ZM18 29V33V29ZM16 31H20H16ZM25 15L27.286 21.857L33 24L27.286 26.143L25 33L22.714 26.143L17 24L22.714 21.857L25 15Z"
            stroke="#919191"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Capabilities",
      desc: "Remembers what user said earlier in the conversation",
      icon: (
        <svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.666504" width="48" height="48" rx="24" fill="#F8F8F8" />
          <path
            d="M25.6176 14.9271C25.3186 14.0061 24.0156 14.0061 23.7156 14.9271L22.1966 19.6011C22.1312 19.8017 22.0039 19.9765 21.8331 20.1005C21.6623 20.2244 21.4566 20.2911 21.2456 20.2911H16.3316C15.3636 20.2911 14.9596 21.5311 15.7436 22.1011L19.7196 24.9891C19.8904 25.1132 20.0175 25.2883 20.0827 25.4891C20.1479 25.6899 20.1479 25.9063 20.0826 26.1071L18.5646 30.7811C18.2646 31.7021 19.3196 32.4691 20.1026 31.8991L24.0786 29.0111C24.2495 28.8869 24.4553 28.8199 24.6666 28.8199C24.8779 28.8199 25.0837 28.8869 25.2546 29.0111L29.2306 31.8991C30.0136 32.4691 31.0686 31.7031 30.7686 30.7811L29.2506 26.1071C29.1853 25.9063 29.1853 25.6899 29.2505 25.4891C29.3157 25.2883 29.4428 25.1132 29.6136 24.9891L33.5896 22.1011C34.3726 21.5311 33.9706 20.2911 33.0016 20.2911H28.0866C27.8757 20.2909 27.6703 20.2241 27.4997 20.1002C27.3291 19.9763 27.202 19.8016 27.1366 19.6011L25.6176 14.9271Z"
            stroke="#919191"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Limitations",
      desc: "May occasionally generate incorrect information",
      icon: (
        <svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.333496" width="48" height="48" rx="24" fill="#F8F8F8" />
          <path
            d="M24.3334 21V23M24.3334 27H24.3434M17.4054 31H31.2614C32.8014 31 33.7634 29.333 32.9934 28L26.0654 16C25.2954 14.667 23.3714 14.667 22.6014 16L15.6734 28C14.9034 29.333 15.8654 31 17.4054 31Z"
            stroke="#919191"
            strokeLidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      desc: "Got any creative ideas for a 10 year old’s birthday? →",
    },
    {
      id: 6,
      desc: "Allows user to provide follow-up corrections",
    },
    {
      id: 7,
      desc: "May occasionally produce harmful instructions or biased",
    },
    {
      id: 8,
      desc: "How do I make an HTTP request in Javascript? →",
    },
    {
      id: 9,
      desc: "Trained to decline inappropriate requests",
    },
    {
      id: 10,
      desc: "Limited knowledge of world and events after 2021",
    },
  ];

  return (
    <article className="w-full flex flex-col items-center pt-6">
      <h3 className="font-semibold text-3xl">Chat GPT</h3>
      <p className="text-sm text-gray-400 mb-8">Ver 4.0 Mar 14</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[600px]">
        {options.map((item) => {
          return (
            <li
              key={item.id}
              className={`col-span-1 p-4 border-2 rounded-md flex flex-col gap-2 min-w-[150px] hover:border-blue-400 duration-200 select-none group cursor-pointer items-center lg:items-start ${
                item.title === "Limitations" && "md:col-span-2 lg:col-span-1"
              }`}
            >
              {item.icon && item.icon}
              {item.title && (
                <span className={`group-hover:text-blue-500 duration-200`}>
                  {item.title}
                </span>
              )}
              <p className="group-hover:text-blue-500 duration-200 text-[12px] leading-4 md:text-sm text-gray-400 decoration-slice text-center lg:text-left">
                {item.desc}
              </p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Welcome;
