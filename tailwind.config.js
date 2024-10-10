/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-blue':'#080045',
      },
    },
    fontFamily:{
      'Glitch':["Rubik Glitch"],
    },
  },
  plugins: [],
}

