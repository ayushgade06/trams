/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-coral': '#F97171',
        'brand-pink': '#FFD6E0',
        'brand-green': '#C8F0D0',
        'brand-purple': '#7B61FF',
        'brand-sage': '#C8D8C8',
      },
    },
  },
  plugins: [],
}
