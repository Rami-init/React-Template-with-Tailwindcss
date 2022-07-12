/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        greyLink: '#7c7979',
        brightRed: '#df3803',
        brightLight: '#FF5722',
        brightSuperLight: '#ff572263',
        greyLight: '#f1eeee',
      }
    },
  },
  plugins: [],
}
