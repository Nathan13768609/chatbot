import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ChatRoom from "./components/ChatRoom";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <Container>
      <CssBaseline /> {/* Normalize the styling */}
      <ChatRoom />
    </Container>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;