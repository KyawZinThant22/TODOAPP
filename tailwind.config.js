module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors: {
      VeryLightGray: "hsl(0, 0%, 98%)",
      VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
      LightGrayishBlue: "hsl(233, 11%, 84%)",
      DarkGrayishBlue: "hsl(236, 9%, 61%)",
      VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      VeryDarkBlue: " hsl(235, 21%, 11%)",
      VeryDarkDesaturatedBlue: " hsl(235, 24%, 19%)",
    },
    letterSpacing: {
      wide: "0.1em",
      wider: "0.2em",
    },
    extend: {
      backgroundImage: (theme) => ({
        "desktop-dark": "url('/src/assets/images/bg-desktop-dark.jpg')",
        "desktop-light": "url('/src/assets/images/bg-desktop-light.jpg')",
        "mobile-dark": "url('/src/assets/images/bg-mobile-dark.jpg')",
        "mobile-light": "url('/src/assets/images/bg-mobile-light.jpg')",
        "gradient-check": "linear-gradient(to right, #55DDFF, #C058F3);",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
// https://github.com/KyawZinThant22/TODOAPP/blob/wai/developing/src/assets/images/bg-desktop-dark.jpg
