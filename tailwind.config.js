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
      'red': 'FF0000',
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    extend: {},
  },
  plugins: [],
}

