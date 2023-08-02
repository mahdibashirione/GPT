import React, { useEffect, useState } from "react";
import SendBox from "../Components/SendBox";
import "../styles/global.css";
import Layout from "../Layout/Layout";
import MessageList from "../Components/MessageList";
import http from "../services/httpServices";
import Welcome from "../Components/Welcome";

const HomePage = () => {
  const API_KEY = "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";
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localMessage =
      JSON.parse(localStorage.getItem("irgpt-messages")) || [];
    setMessages(localMessage);
  }, []);
  useEffect(() => {
    localStorage.setItem("irgpt-messages", JSON.stringify(messages));
  }, [messages]);

  const handleNewMessage = (newMessage) => {
    const localMessages =
      JSON.parse(localStorage.getItem("irgpt-messages")) || [];
    const updatedMessages = [...localMessages, newMessage];
    setMessages(updatedMessages);
    console.log(messages);
  };
  const Send_Message = async () => {
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [...messages],
    };
    setLoading(true);
    try {
      const { data } = await http.post(
        "https://api.openai.com/v1/chat/completions",
        JSON.stringify(apiRequestBody),
        {
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
    } catch (error) {
      handleNewMessage({
        role: "error",
        content:
          "You exceeded your current quota, please check your plan and billing details.",
      });
      setLoading(false);
    }
  };

  return (
    <Layout>
      <main className="row-span-1 h-[calc(100vh-69px)] col-span-full lg:col-span-1 px-2 relative min-w-[280px] overflow-y-scroll scrollbar-none ">
        {messages.length ? (
          <MessageList loading={loading} messages={messages} />
        ) : (
          <Welcome />
        )}
      </main>
      <SendBox handleSend={Send_Message} handleNewMessage={handleNewMessage} />
    </Layout>
  );
};

export default HomePage;

export const Head = () => <title>Chat GPT</title>;
