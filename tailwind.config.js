/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00C2FF',
        secondary: '#DD0BFF',
        dark: '#111111'
      },
      fontFamily: {
        parisienne: ['Parisienne', 'cursive']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      }
    }
  },
  plugins: []
};