const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: "rgb(17 24 39 / 95%)",
        // Other colors from the galaxy blobcat:
        // pink-500,
        // indigo-900
        // teal-400
        // purple-600
      },
      fontFamily: {
        ...fontFamily,
        'sans': ['Poppins', 'sans-serif'],
        'heading': ['Victor Mono', 'monospace']
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
          '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
          '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
          '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}