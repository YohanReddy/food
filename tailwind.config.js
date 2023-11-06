/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/(tabs)/*.{js.tsx,ts,jsx}",
    "app/(tabs)/index.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
