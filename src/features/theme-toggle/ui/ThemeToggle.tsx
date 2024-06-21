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
      {theme === Theme.DARK ? <MoonIcon color="#ffffff" /> : <SunIcon />}
      {/* </div> */}
    </IconButton>
  );
};

export default ThemeToggle;
