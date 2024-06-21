import { useState } from "react";
import { close, menu } from "../../assets/index";
import { navLinks } from "../../entities/nav-links";
import LangSelector from "./LangSelector";
import Logo from "./Logo";
import styles from "../../style";
import ThemeToggle from "../../features/theme-toggle/ui/ThemeToggle";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Navigation = {
  home: string;
  services: string;
  eu_delivery: string;
  about: string;
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const navigation = t("navbar") as unknown as Navigation;

  return (
    <nav
      className={`w-full py-6 px-4 lg:px-6 navbar ${styles.paddingX} bg-background`}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* DESKTOP */}
        <Logo />

        <ul className="list-none sm:flex hidden justify-center items-center lg:gap-x-12 relative">
          {navLinks.map((nav, index) => (
            <li
              key={nav}
              className={`font-body font-normal text-base cursor-pointer text-text md:hover:text-blue-700 ${
                index === navLinks.length - 1 ? `mr-0` : `mr-5`
              }`}
            >
              <Link to={`/#${nav}`}>{navigation[nav]}</Link>
            </li>
          ))}
        </ul>

        <span className="list-none sm:flex hidden justify-end items-center">
          <Link to={"/contact"}>
            <button
              type="button"
              className="
                text-white 
                bg-blue-700 
                hover:bg-blue-800 
                focus:ring-4
                focus:outline-none
                font-body font-normal
                rounded-lg
                px-4 py-0.5
                text-center
                mr-4
              "
            >
              Go to form
            </button>
          </Link>
          <LangSelector />
          <ThemeToggle className="ml-5" />
        </span>

        {/* MOBILE */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain z-50"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient fixed inset-0 z-40 flex-col items-center justify-center`}
      >
        <ul className="list-none flex flex-col justify-center items-center flex-1 space-y-6">
          {navLinks.map((nav) => (
            <li
              key={nav}
              className="font-popins font-normal cursor-pointer text-[24px] text-white"
            >
              <Link to={`/#${nav}`} onClick={() => setToggle(false)}>
                {navigation[nav]}
              </Link>
            </li>
          ))}
          <li className="font-popins font-normal cursor-pointer text-[24px] text-white">
            <Link to={"/contact"} onClick={() => setToggle(false)}>
              Go to form
            </Link>
          </li>
          <li className="font-popins font-normal cursor-pointer text-[24px] text-white">
            <LangSelector />
          </li>
          <li className="font-popins font-normal cursor-pointer text-[24px] text-white">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
