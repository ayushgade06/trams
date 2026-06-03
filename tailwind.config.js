/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'Inter', 'sans-serif'],
        gerbil: ['Gerbil', 'sans-serif'],
      },
      colors: {
        'brand-coral': '#FF6B6B',
        'brand-pink': '#F5B4D6',
        'brand-green': '#DDE8D9',
        'brand-purple': '#8D4DE8',
        'brand-sage': '#DDE8D9',
        'testimonial-bg': '#EEF2EC',
      },
    },
  },
  plugins: [],
}
