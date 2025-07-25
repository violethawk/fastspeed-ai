/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', // Tailwind's blue-600 for CTAs
        secondary: '#1E3A8A', // Darker blue for accents
        accent: '#FBBF24' // Amber-400 for highlights such as stars
      }
    }
  },
  plugins: []
};