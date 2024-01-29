import React from "react";
import { Theme } from "../model/types";
import { useTheme } from "../model/themeContext";
import IconButton from "../../../shared/ui/IconButton";
// import { ReactComponent as Moon } from "./assets/moon.svg";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <IconButton onClick={toggleTheme} className={className}>
      {/* <div > */}
      {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
      {/* </div> */}
    </IconButton>

    // <button
    //   className={`font-popins font-normal cursor-pointer text-[16px] ml-5 text-white`}
    //   onClick={toggleTheme}
    // >
    //   <div className={`w-[28px] h-[28px] `}>
    //     {/* {theme === Theme.DARK ? (
    //       <img src={moon} alt={theme} />
    //     ) : (
    //       <img src={sun} alt={theme} />
    //     )} */}
    //   </div>
    // </button>
  );
};

export default ThemeToggle;
