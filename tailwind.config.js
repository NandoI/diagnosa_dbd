/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-blue": "#E2F0F9",
        "light-green": "#B0DDE4",
        "dark-blue": "#286FB4",
        "dark-rose": "#DF4C73"
      },
      fontFamily:{
       Italiana: ["Italiana", "serif"],
       Lora: ["Lora", "serif"]
      }
    },
  },
  plugins: [],
}

