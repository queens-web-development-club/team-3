/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {},
      backgroundColor: {
        "custom-purple": "#8823C6",
        "custom-orange": "#FFBA53",
      },
      textColor: {
        "custom-purple": "#8823C6",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
