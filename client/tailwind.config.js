/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Pastikan path ini sesuai folder kamu
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1DA1F2", // Contoh custom color
      },
    },
  },
  plugins: [],
};
