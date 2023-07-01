import * as React from "react";
import { Toaster } from "react-hot-toast";
import Welcome from "../Components/Welcome";
import SendBox from "../Components/SendBox";
import "../styles/global.css";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-[69px] pb-32 px-2">
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
