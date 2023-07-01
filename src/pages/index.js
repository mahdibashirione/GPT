import * as React from "react";
import Welcome from "../Components/Welcome";
import SendBox from "../Components/SendBox";
import "../styles/global.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-[61px] md:mt-[73px]">
        <section className="overflow-hidden container">
          <Welcome />
          <SendBox />
        </section>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default HomePage;

export const Head = () => <title>Home Page</title>;
