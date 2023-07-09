import React from "react";
import VersionChanger from "../../Components/VersionChanger";
import Layout from "../../Layout/Layout";
import ModeChanger from "../../Components/ModeChanger";

const SettingsPage = () => {
  return (
    <Layout>
      <main className="lg:row-span-1 h-[calc(100vh-69px)] overflow-y-scroll scrollbar-none col-span-full lg:col-span-1 px-2 relative">
        <section className="overflow-scroll h-full max-h-[100vh-69px] scrollbar-none pb-28">
          <div className="mx-auto max-w-[350px] md:max-w-[500px] pt-4 px-1">
            <ModeChanger />
            <VersionChanger />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SettingsPage;

export const Head = () => <title>Settings</title>;
