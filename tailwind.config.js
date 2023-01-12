/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        digilabs: '#9D0AFF',
        deepurple: '#151531',
        graypurple: '#2c2c44'
      },

    },
  },
  plugins: [require("daisyui"),],
}
