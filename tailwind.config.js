/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '430px', //For compatibility with iPhone12/13 pro max
      xl: '1440px',
    },
    colors: {
      'dark-cyan': 'hsl(158, 36%, 37%)',
      'cream': 'hsl(30, 38%, 92%)',
      'very-dark-blue': 'hsl(212, 21%, 14%)',
      'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'sans-serif'],
    },
    fontSize: {
      'base': '14px',
    },
    extend: {},
  },
  plugins: [],
}