/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        Urbanist : [],
      },
      colors: {
        primary: '#1B77B4',
        secondary: '#E53E3E',
        'gray-lightest': '#F9FAFC',
        'gray-darkest': '#1A202C',
      },
    },
  },
  plugins: [],
};
