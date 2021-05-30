const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./components/**/*.{vue,js}",

      "./layouts/**/*.vue",

      "./pages/**/*.vue",

      "./plugins/**/*.{js}",

      "./nuxt.config.{js}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        darkest: "#011F4B",
        dark: "#005B96",
        DEFAULT: "#0DB2F2",
        light: "#C6EDFF",
        lightest: "#F1FAFE",
      },
      gray: {
        darkest: "#7E8299",
        dark: "#B3B3B3",
        DEFAULT: "#CCCCCC",
        light: "#F3F6F9",
      },
      teal: {
        light: "#1BC5BD",
        dark: "#10A09A",
      },
      white: "#FFFFFF",
      "app-accent": "#F6CA65",
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      gridTemplateRows: {
        "page-layout-rows": "170px 1fr 1fr 1fr;",
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["active"],
      ringColor: ["focus"],
    },
  },
  plugins: [],
};
