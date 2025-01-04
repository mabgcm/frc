/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        frcPurple: "#E76F51", // Primary purple
        frcBlue: "#F4A261",   // Accent blue
        frcGray: "#2B2B3A",   // Dark gray background
        frcWhite: "#F5F5F5",  // White text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Replace with your desired font
      },
    },
  },
  plugins: [],
};
