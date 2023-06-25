/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: '#0891b2',
      white: '#e2e8f0'
    },
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}

