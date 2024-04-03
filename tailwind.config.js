/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      inset: {
        "-50": "-50%",
      },
      colors: {
        "primary-blue": "#1300E0",
        "secondary-blue": "#6F67C1",
        "tertiary-blue": "#7F78D5",
        "primary-orange": "#B67810",
        "secondary-orange": "#DC941F",
        "tertiary-orange": "#DA9E3C",
      },
    },
  },
  plugins: [],
};
