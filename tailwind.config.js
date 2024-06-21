/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        text: "hsl(var(--text))",
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
      },
      fontSize: {
        sm: "0.750rem", // 12px
        base: "1rem", // 16px
        xl: "1.333rem", // ~21px
        "2xl": "1.777rem", // ~28px
        "3xl": "2.369rem", // ~38px
        "4xl": "3.158rem", // ~50px
        "5xl": "4.210rem", // ~67px
      },
      fontFamily: {
        heading: ["IBM Plex Sans Thai", "sans-serif"], // Добавьте запасные шрифты
        body: ["IBM Plex Sans Thai", "sans-serif"], // Добавьте запасные шрифты
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      // },
      url: {
        "hero-ss": "url(/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-sm": "url(/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-md": "url(/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-lg": "url(/cargo-ship/cargo-ship-1536x1023.jpg)",
        "hero-xl": "url(/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-xxl": "url(/cargo-ship/cargo-ship-2560-1705.jpg)",
      },

      backgroundImage: {
        "hero-ss": "url(/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-sm": "url(/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-md": "url(/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-lg": "url(/cargo-ship/cargo-ship-1536x1023.jpg)",
        "hero-xl": "url(/cargo-ship/cargo-ship-2048x1364.jpg)",
        "hero-xxl": "url(/cargo-ship/cargo-ship-2560-1705.jpg)",
      },
      backgroundSize: {
        "50%": "50%",
      },
    },
    screens: {
      sm: "620px",
      md: "768px",
      lg: "1440px",
      xl: "1700px",
      xxl: "2200px",
    },
  },
  plugins: [],
};
