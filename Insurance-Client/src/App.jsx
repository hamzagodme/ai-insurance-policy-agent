import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([
    `Tina: I'm Tina. I help you to choose the right insurance policy. May I ask you a few personal questions to make sure I recommend the best policy for you?`,
  ]);
  const [history, setHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  const scrollRef = useRef(null);

  const callAPI = async (history, message) => {
    return axios.post("http://localhost:4000/api/policy-assistant", {
      history: history,
      message: message,
    });
  };

  const handleSubmit = async () => {
    if (userInput.trim()) {
      // Add user message to messages
      const userMessage = `You: ${userInput}`;
      setMessages([...messages, userMessage]);
      const userInputCopy = userInput; // Capture current input for server usage
      setUserInput("");

      try {
        // Send the user's message to your backend
        const response = await callAPI(history, userInputCopy);

        // Add AI response to messages
        const serverMessage = `Tina: ${response.data.message}`;
        setMessages((prevMessages) => [...prevMessages, serverMessage]);

        // Save the chat history
        setHistory([
          ...history,
          { role: "user", parts: [{ text: userInputCopy }] },
          { role: "model", parts: [{ text: response.data.message }] },
        ]);
      } catch (error) {
        console.error("Error calling backend API:", error);
        const errorMessage = "server: There was an error with the AI service.";
        setMessages((prevMessages) => [...prevMessages, errorMessage]);

        setUserInput(userInputCopy);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <h1 className="title">Tina - Your AI Insurance Policy Assistant</h1>
      <div className="container">
        <div className="scrollable-box" ref={scrollRef}>
          {messages.map((msg, index) => (
            <p key={index} className="message">
              {msg}
            </p>
          ))}
        </div>
        <div className="input-section">
          <input
            type="text"
            className="input"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
