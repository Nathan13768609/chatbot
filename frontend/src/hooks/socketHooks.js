import React, { useState, useEffect, useRef, useCallback } from "react";
import io from "socket.io-client";

const useSocket = (serverURL) => {
  const socketRef = useRef(null);

  //connect to server
  useEffect(() => {
    socketRef.current = io(serverURL, {
      transports: ["websocket"], // ensure websockets is used and not polling
    });

    // Log connection event
    socketRef.current.on("connect", () => {
      console.log("WebSocket Connected:", socketRef.current.id);
    });

    // Log reconnection event
    socketRef.current.on("reconnect", (attempt) => {
      console.log("Reconnection attempt: #", attempt);
    });

    // Cleanup on unmount
    return () => {
      socketRef.current.disconnect();
      console.log("WebSocket Disconnected");
    };
  }, [serverURL]);

  const sendMessage = useCallback((message) => {
    socketRef.current.emit("chatMessage", message);
  }, []);

  // event listener for incoming messages
  const onMessage = useCallback((callback) => {
    socketRef.current.on("chatMessage", callback);

    // Cleanup listener when the callback changes or component unmounts
    return () => {
      socketRef.current.off("chatMessage", callback);
    };
  }, []);

  return {
    sendMessage,
    onMessage,
  };
};

export default useSocket;
