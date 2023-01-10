/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        digilabs: '#9D0AFF'
      },

    },
  },
  plugins: [require("daisyui"),],
}
