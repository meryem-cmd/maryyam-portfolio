/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#00D9FF',
        'dark': '#0a0e27',
        'darkCard': '#1a1f3a',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Roboto','Inter', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}