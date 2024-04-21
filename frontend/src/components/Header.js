import React from "react";
import { Box, Stack, Switch } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
      }}
    >
      <h1>Chat Room</h1>
      <Stack direction="row" spacing={1} alignItems="center">
        <p>Dark</p>
        <Switch onClick={toggleTheme} color="primary" defaultChecked>
          Toggle Theme
        </Switch>
        <p>Light</p>
      </Stack>
    </Box>
  );
}

export default Header;
