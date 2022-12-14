/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          primary: '#13F26D',
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./assets/Car-dealer.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}
