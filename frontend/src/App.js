import "./App.css";
import React from "react";
import ChatRoom from "./components/ChatRoom";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ChatRoom />
    </ThemeProvider>
  );
}

export default App;
