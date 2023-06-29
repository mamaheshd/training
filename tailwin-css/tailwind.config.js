/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'test-100':'#447E17',
        'test-200':'#3A869A',
      },
      spacing:{
        '15':'100px',
      }
    },
  },
  plugins: [],
}

