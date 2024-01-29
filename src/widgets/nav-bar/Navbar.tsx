import { useState } from "react";
import { close, menu, moon, sun } from "../../assets/index";
import { navLinks } from "../../constants";
import { useTheme } from "../../features/theme-toggle/model/themeContext";
import { Theme } from "../../features/theme-toggle/model/types";
import LangSelector from "./LangSelector";
import Logo from "./Logo";
import styles from "../../style";
import ThemeToggle from "../../features/theme-toggle/ui/ThemeToggle";
const Navbar = () => {
  const [theme] = useTheme();
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${
        theme === Theme.DARK ? `bg-gray-800` : `bg-white`
      } w-full  py-6 px-4 lg:px-6  navbar ${styles.paddingX}`}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* DESKTOPE */}

        <Logo />

        <ul className="list-none sm:flex hidden justify-center items-center  lg:gap-x-12 relative">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-popins font-normal cursor-pointer text-[16px] 
              ${index === navLinks.length - 1 ? `mr-0` : `mr-5`}
              ${theme === Theme.DARK ? `text-white` : `text-gray-700`}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <span className="list-none sm:flex hidden justify-end items-center w-[124px]">
          <LangSelector
          // className={`font-popins font-normal cursor-pointer text-[16px] mr-10 ml-10 text-white`}
          />
          <ThemeToggle className="ml-5" />
        </span>

        {/* MOBILE */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? `flex` : `hidden`
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col  justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-popins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? `mb-0` : `mb-4`
                  } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
