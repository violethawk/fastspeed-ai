/**
 * Tailwind configuration.
 *
 * This file defines the content files Tailwind should scan for class
 * names, extends the default theme with a simple system font stack
 * and leaves the rest of Tailwind’s defaults intact. No plugins are
 * required because we avoid external libraries.
 */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};