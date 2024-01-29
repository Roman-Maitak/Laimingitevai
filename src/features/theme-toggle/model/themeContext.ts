import React from "react";
import { ThemeContextType } from "./types";

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useContext must be used in ThemeProvider");
  }
  return context;
};



export { useTheme, ThemeContext };
