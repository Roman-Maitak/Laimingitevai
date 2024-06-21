// import styles from "../style";

import { Footer } from "../widgets/footer/Footer";
import LandingPage from "../pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/Contact/ContactPage";
import Navbar from "../widgets/nav-bar/Navbar";
import { useTheme } from "../features/theme-toggle/model/themeContext";
import { useEffect } from "react";
import { Theme } from "../features/theme-toggle/model/types";

const App = () => {
  const [theme] = useTheme();

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <div
      className={
        "w-full h-screen snap-y snap-mandatory overflow-y-scroll bg-background"
      }
    >
      <header className="">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
