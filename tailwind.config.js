/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "_dark-blue": "#007EA7",
        "_dark-rose": "#6B0F1A",
        _platinum: "#DCE0D9",
        "_rich-black": "#0D1B1E",
      },
    },
  },
  plugins: [],
};
