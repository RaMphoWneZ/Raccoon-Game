/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'telegram-bg': '#242f3d',
        'telegram-secondary': '#17212b',
        'telegram-accent': '#5ebbf8',
      },
    },
  },
  plugins: [],
};