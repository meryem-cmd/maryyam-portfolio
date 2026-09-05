/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#5DCAA5',
        'accentDark': '#04342C',
        'dark': '#12181A',
        'darkCard': '#1B2224',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Roboto', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}