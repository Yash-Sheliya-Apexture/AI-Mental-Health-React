/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        UrbanistFont: ["Urbanist", "serif"],
      },
      colors: {
        "Mindful-Gray": " #F7F4F2",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
