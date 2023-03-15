// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sen)', ...fontFamily.sans],
      },
      colors: {
        primary: '#6F43C0',
        'on-primary': '#FFF',
        'primary-container': '#EBDDFF',
        'on-primary-container': '#250059',
        'tertiary-container': '#FFDF9E',
        'on-tertiary-container': '#261A00',
        background: '#fffbff',
        'on-background': '#1D1B1E',
        surface: '#fffbff',
        'on-surface': '#1d1b1e',
        outline: '#7A757F',
        'spotify-green': '#1ED760',
      },
    },
  },
  important: true,
  plugins: [require('daisyui')],
}
