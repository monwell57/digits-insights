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
        "primary-brand": "#FF7B00",
        "primary-dark": "#1b181e",
        "primary-bg": "#F0F0F0",
        "light-accent": "#83a3a9",
        "dark-accent": "#877068",
      },
    },
  },
  plugins: [],
};
