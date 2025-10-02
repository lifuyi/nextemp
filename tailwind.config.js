/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#000000",
        light: "#ffffff",
        primary: "#007AFF",
        primaryDark: "#0056CC",
        lightGreen: "#007AFF",
        slideGreen: "#0056CC",
        appleGray: "#F2F2F7",
        appleDarkGray: "#1C1C1E",
        appleSecondary: "#8E8E93",
        appleBlue: "#007AFF",
        appleGreen: "#34C759",
        appleOrange: "#FF9500",
        appleRed: "#FF3B30",
        // Add gradient color stops for proper from/via/to usage
        "blue-500": "#007AFF",
        "green-500": "#34C759",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },

      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.08) 2px,#ffffff 5px,#ffffff 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.08) 2px,#000000 8px,#000000 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.08) 2px,#ffffff 5px,#ffffff 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.08) 2px,#000000 8px,#000000 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.08) 2px,#ffffff 5px,#ffffff 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.08) 2px,#000000 8px,#000000 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.08) 2px,#ffffff 5px,#ffffff 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.08) 2px,#000000 8px,#000000 40px)",
        // Enhanced gradient backgrounds
        appleGradientBlueToGreen: "linear-gradient(135deg, #007AFF 0%, #34C759 100%)",
        appleGradientBlueToPurple: "linear-gradient(135deg, #007AFF 0%, #AF52DE 100%)",
        appleGradientWarm: "linear-gradient(135deg, #FF9500 0%, #FF3B30 100%)",
        appleGradientCool: "linear-gradient(135deg, #5AC8FA 0%, #007AFF 100%)",
        appleGradientText: "linear-gradient(135deg, #007AFF 0%, #34C759 50%, #AF52DE 100%)",
        appleGradientSubtle: "linear-gradient(135deg, #007AFF 0%, #34C759 30%, #5AC8FA 100%)",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(0,122,255, 0.4)",
        "apple": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "apple-lg": "0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.15)",
        "apple-xl": "0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
