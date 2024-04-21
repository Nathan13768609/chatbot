import React, { createContext, useContext, useState, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext({
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light"); // Default theme

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: themeMode,
      },
    });
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline /> {/* Ensure consistent theme through entire app */}
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
