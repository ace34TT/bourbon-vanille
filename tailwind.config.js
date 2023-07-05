/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#132821",
        secondary: "#F7EEE2",
        accent: "#FECD4A",
        complementary: "#C2975B",
      },
      zIndex: {
        negative: "-1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
