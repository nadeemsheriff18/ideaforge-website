/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-blue':'#080045',
        'neon-bluy':'#00eaff',
      },
    },
    fontFamily:{
      'Glitch':["Rubik Glitch"],
      'handjet':["Handjet"],
    },
  },
  plugins: [],
}