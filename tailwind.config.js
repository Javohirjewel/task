/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "pop": ["Poppins", 'sans-serif'],
        "nunito": ["Nunito", 'sans-serif'],
        "ralewy": ["Raleway", 'sans-serif'],
        "open": ["Open Sans", 'sans-serif']
      },
      colors: {
        'colorfirst': '#1e1e1e',
        'colorsecond': "#393939",
        "colorwhite": '#fefcfc'
      },
    },
  },
  plugins: [],
}

