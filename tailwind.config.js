/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#141414',
        secondary: '#B46060',
        tertiary: {
          light: '#FFF4E0',
          dark: '#FFBF9B',
        },
      },
    },
  },
  plugins: [],
}
