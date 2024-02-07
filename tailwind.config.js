/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rubik:['Rubik'],
        dm:['DM Serif Text'],
        faustine:['Faustina'],
        canada:['Radio Canada'],
        roboto:['Roboto'],
        dm_serif_text:['DM Serif Text']
      },
    },
  },
  plugins: [],
}

