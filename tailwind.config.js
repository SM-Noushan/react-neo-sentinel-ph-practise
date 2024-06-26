/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-01": "",
        "dark-02": "#403F3F",
        "dark-03": "#706F6F",
        "dark-04": "#9F9F9F",
        "dark-06": "#E7E7E7",
        "dark-07": "#F3F3F3",
        hotRed: "#D72050",
        orange: "#FF8C47",
        blue: "#58A7DE",
      },
      fontFamily: {
        uniFrakturCook: ["UnifrakturCook", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
