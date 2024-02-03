const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,astro}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'primary': '#42b883',
      'primary-dark': '#21262b',
      'black': '#000000',
      'white': '#FFFFFF',
      'red': '#FF0000',
      'gray': '#666666',
      'gray-dark': '#333333',
      'background-icons': '#242938',
      'linkedin': '#0077B5'
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    extend: {
      fontFamily: {
        NerdFont3270: ['"3270NerdFont"', 'sans-serif'],
        ProFontNerd: ['"ProFontNerd"', 'sans-serif'],
        SFMono: ['"SFMono"', 'sans-serif'],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
}

