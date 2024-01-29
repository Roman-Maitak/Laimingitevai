import { useState } from "react";
import { Theme } from "./types";
import { ThemeContext } from "./themeContext";

const getDefTheme = () => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme && localTheme !== null) {
    if (localTheme === Theme.DARK) return Theme.DARK;
    else if (localTheme === Theme.LIGHT) return Theme.LIGHT;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("theme", Theme.DARK);
    return Theme.DARK;
  } else {
    localStorage.setItem("theme", Theme.LIGHT);
    return Theme.LIGHT;
  }
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(getDefTheme);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
