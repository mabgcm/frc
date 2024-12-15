/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        frcPurple: "#CB6CE6", // Primary purple
        frcBlue: "#38B6FF",   // Accent blue
        frcGray: "#3E4149",   // Dark gray background
        frcWhite: "#FFFFFF",  // White text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Replace with your desired font
      },
    },
  },
  plugins: [],
};
