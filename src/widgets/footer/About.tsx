import React from "react";
import { logo } from "../../assets";

const About = () => {
  return (
    <div className="">
      <a
        href="#"
        className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img src={logo} alt="Laimingitevai Logo" />
        <h1>Lamiingi Tevai</h1>
      </a>
      <p className="my-6 text-gray-500 dark:text-gray-400">
        Our company is an expert in meeting the individual needs of customers,
        specializing in the supply of goods from Europe on order, and their
        further delivery to your doorstep! Our goal is to make your ordering
        experience with us simple, convenient and fully in line with your
        expectations.
      </p>
    </div>
  );
};

export default About;
