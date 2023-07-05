import * as React from "react";
import Welcome from "../Components/Welcome";
import SendBox from "../Components/SendBox";
import "../styles/global.css";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <main className="row-span-1 col-span-full lg:col-span-1 px-2 relative border-t dark:border-gray-500 min-w-[280px] xl:border-r">
        <section className="overflow-scroll h-full max-h-[100vh-69px] scrollbar-none pb-28">
          <Welcome />
        </section>
        <SendBox />
      </main>
    </Layout>
  );
};

export default HomePage;

export const Head = () => <title>Chat GPT</title>;
