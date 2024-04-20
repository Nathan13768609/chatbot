import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import MessageList from "./MessageList";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // URL of your WebSocket server

function ChatRoom() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("chatMessage");
    };
  }, []);

  const handleSend = () => {
    if (message) {
      socket.emit("chatMessage", message);
      setMessage("");
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h1>Chat Room</h1>
      <MessageList messages={messages} />
      <TextField
        fullWidth
        label="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? handleSend() : null)}
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
}

export default ChatRoom;
