import React from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

function MessageList({ messages }) {
  return (
    <Paper style={{ maxHeight: 300, overflow: "auto", marginBottom: "1rem" }}>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default MessageList;
