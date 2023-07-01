import * as React from "react";
import Layout from "../Layout/Layout";
import Welcome from "../Components/Welcome";
import SendBox from "../Components/SendBox";
import "../styles/global.css";

const HomePage = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-89px)] overflow-hidden mt-[61px] md:mt-[73px] container">
        <Welcome />
        <SendBox />
      </section>
    </Layout>
  );
};

export default HomePage;

export const Head = () => <title>Home Page</title>;
