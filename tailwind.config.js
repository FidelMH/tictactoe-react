/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blueRed: {
          "0%": { color: "rgb(220,38,38)" },
          "100%": { color: "rgb(2,132,199)" },
        },
      },
    },
    animation: {
      pulseBlueRed: "blueRed 2s ease-in-out infinite alternate ",
    },
  },
  plugins: [],
};
