import React, { useEffect } from "react";
import ModeChangerMini from "../../Components/ModeChangerMini";
import VersionChanger from "../../Components/VersionChanger";
import { navigate } from "gatsby";
import Layout from "../../Layout/Layout";

const SettingsPage = () => {
  function handleBackToHome() {
    window.innerWidth >= 1024 && navigate("/");
  }

  useEffect(() => {
    window.innerWidth >= 1024 && navigate("/");
    window.addEventListener("resize", handleBackToHome);
  }, []);

  return (
    <Layout>
      <main className="lg:row-span-1 col-span-full lg:col-span-1 px-2 relative border-t dark:border-gray-500 min-w-[280px] xl:border-r">
        <section className="overflow-scroll h-full max-h-[100vh-69px] scrollbar-none pb-28">
          <div className="mx-auto max-w-[350px] pt-4 px-1">
            <ModeChangerMini />
            <VersionChanger />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SettingsPage;

export const Head = () => <title>Settings</title>;
