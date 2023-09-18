/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
      // serif: ['Merriweather', 'serif']
    },
    extend: {}
  },
  plugins: [tailwindScrollbarHide]
}
