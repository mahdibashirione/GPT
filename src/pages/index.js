import * as React from "react";
import { Toaster } from "react-hot-toast";
import Welcome from "../Components/Welcome";
import SendBox from "../Components/SendBox";
import "../styles/global.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const HomePage = () => {
  return (
    <div className="dark:bg-zinc-900 dark:text-white h-screen w-screen grid overflow-hidden grid-rows-[69px_minmax(0,1fr)] grid-cols-[minmax(0,auto)_minmax(0,1fr)] max-w-[1600px] mx-auto">
      <Navbar />
      <Sidebar />
      <main className="row-span-1 col-span-1 px-2 relative border-t dark:border-gray-500 min-w-[280px] xl:border-r">
        <section className="overflow-scroll h-full max-h-[100vh-69px] scrollbar-none pb-28">
          <Welcome />
        </section>
        <SendBox />
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default HomePage;

export const Head = () => <title>Chat GPT</title>;
