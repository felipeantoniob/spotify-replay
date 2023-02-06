/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'purple-gradient': "url(/img/gradient.png)"
      }
    },
  },
  important: true,
  plugins: [require('daisyui')],
}
