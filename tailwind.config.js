const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        apple: {
          50: "#f2fbf2",
          100: "#e1f7e2",
          200: "#c5edc6",
          300: "#97de9b",
          400: "#62c668",
          500: "#3ca942",
          600: "#2d8c32",
          700: "#266f2a",
          800: "#235826",
          900: "#1e4922",
          950: "#0c270f",
        },
        green: {
          50: "#edfff1",
          100: "#d6ffe0",
          200: "#afffc1",
          300: "#71ff93",
          400: "#2cfc5c",
          500: "#01ec38",
          600: "#00c029",
          700: "#009624",
          800: "#067521",
          900: "#07601e",
          950: "#00360e",
        },
        primary: {
          50: "#ecfff5",
          100: "#d2ffea",
          200: "#a8ffd6",
          300: "#65ffb9",
          400: "#1bff93",
          500: "#00f973",
          600: "#00d05b",
          700: "#00a24b",
          800: "#007e40",
          900: "#006838",
          950: "#003b1c",
        },
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundColor: "#3ca942" },
          "12.5%": { backgroundColor: "#01ec38" },
          "25%": { backgroundColor: "#00f973" },
          "37.5%": { backgroundColor: "#2cfc5c" },
          "50%": { backgroundColor: "#3B82F6" },
          "62.5%": { backgroundColor: "#6B7280" },
          "75%": { backgroundColor: "#FACC15" },
          "87.5%": { backgroundColor: "#F97316" },
        },
      },
      animation: {
        gradient: "gradient 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
});
