import React from "react";
import styles from "../../style";
import { GetStarted } from "../../components/GetStarted";
import { useTheme } from "../../features/theme-toggle/model/themeContext";

const Hero = () => {
  const [theme] = useTheme();
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  ${
        theme === "dark" ? `bg-black` : `bg-white`
      } `}
    >
      <div
        className={`relative z-0 bg-cover bg-no-repeat 
        xs:bg-hero-ss sm:bg-hero-sm md:bg-hero-md lg:bg-hero-lg xl:bg-hero-xl xxl:bg-hero-xxl
        h-[560px] w-full`}
      >
        <div
          className=" bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed
   "
        >
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">Laimingi Tevai</h1>
              <h3 className="mb-8 text-xl font-bold">
                Logistic solutions for Europe, Asia, USA and CIS countries.
              </h3>
              <button
                type="button"
                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 justify-end"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Contact form
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
