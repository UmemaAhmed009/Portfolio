/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { emerald } = require('tailwindcss/colors');
 
module.exports = withMT({
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular','monospace'],
        'roboto':['"Roboto Serif"','system-ui']
      },
      colors: {
        zinc: require('tailwindcss/colors').zinc,
        stone: require('tailwindcss/colors').stone,
        neutral: require('tailwindcss/colors').neutral,
        rose: require('tailwindcss/colors').rose,
        fuchsia: require('tailwindcss/colors').fuchsia,
        emerald: require('tailwindcss/colors').emerald,
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 5s ease 300ms forwards",
      },
    },
  },
  plugins: [
  ],
});

