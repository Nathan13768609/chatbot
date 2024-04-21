import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import MessageList from "./MessageList";
import Header from "./Header";
import useSocket from "../hooks/socketHooks";

function ChatRoom() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const { sendMessage, onMessage } = useSocket("http://localhost:4000");

  useEffect(() => {
    const disconnectMethod = onMessage((newMessage) => {
      setChatHistory((history) => [...history, newMessage]);
    });

    return disconnectMethod; // Cleanup
  }, [onMessage]); // Resubscribe to onMessage if it ever changes

  const handleSend = () => {
    if (message.trim().length > 0) {
      sendMessage(message);
      setMessage("");
    } else {
      console.log("Error: Input field must be populated");
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Header />
      <MessageList messages={chatHistory} />
      <TextField
        fullWidth
        label="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? handleSend() : null)}
        variant="outlined"
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        disabled={message.trim() <= 0}
      >
        Send
      </Button>
    </Box>
  );
}

export default ChatRoom;
