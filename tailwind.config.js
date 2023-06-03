/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '340px',
      //@media (min-width: 340px) { ... }
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
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
