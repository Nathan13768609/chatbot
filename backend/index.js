const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Adjust this to match the URL of your frontend
    methods: ["GET", "POST"],
  },
});

app.use(cors());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Handle a socket connection request from web client
io.on("connection", (socket) => {
  console.log("A user connected");

  // Receive a message from the client
  socket.on("chatMessage", (msg) => {
    // Broadcast the received message to all connected sockets
    io.emit("chatMessage", msg);
  });

  // When the user disconnects
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
