/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryDark: "#00040f",
        secondaryDark: "#00f6ff",
        primaryLight: "",
        secondaryLight: "#0096FF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-ss": "url(./public/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-sm": "url(./public/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-md": "url(./public/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-lg": "url(./public/cargo-ship/cargo-ship-1536x1023.jpg)",
        "hero-xl": "url(./public/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-xxl": "url(./public/cargo-ship/cargo-ship-2560-1705.jpg)",
      },
      backgroundSize: {
        "50%": "50%",
      },
    },
    screens: {
      xs: "425px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1700px",
      xxl: "2200px",
    },
  },
  plugins: [],
};
