import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { Toaster } from "react-hot-toast";
import ModeChanger from "../../Components/ModeChanger";
import VersionChanger from "../../Components/VersionChanger";

const SettingsPage = () => {
  return (
    <div className="dark:bg-zinc-900 dark:text-white h-screen w-screen grid overflow-hidden grid-rows-[69px_minmax(0,1fr)] grid-cols-[minmax(0,auto)_minmax(0,1fr)] max-w-[1600px] mx-auto">
      <Navbar />
      <Sidebar />
      <main className="lg:row-span-1 col-span-full lg:col-span-1 px-2 relative border-t dark:border-gray-500 min-w-[280px] xl:border-r">
        <section className="overflow-scroll h-full max-h-[100vh-69px] scrollbar-none pb-28">
          <div className="mx-auto max-w-[350px] pt-4">
            <ModeChanger />
            <VersionChanger />
          </div>
        </section>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SettingsPage;

export const Head = () => <title>Settings</title>;
