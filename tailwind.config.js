/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1024px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: "#3EA7E0",
        secondary: "#E1E1E1",
      },
    },
  },
  plugins: [],
};
