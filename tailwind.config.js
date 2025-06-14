/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#33CCCC',
        'primary-dark': '#2bb8b8',
        'text-primary': '#000000',
        'text-secondary': '#586068',
        gray: {
          konektiva: '#D7DDE9',
          custom: '#F4F4F4',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero-sm': ['30px', '1.5'], // 1.5 is line height
      },
      letterSpacing: {
        'hero-sm': '-0.42px',
      },
      fontWeight: {
        'hero-sm': 700,
      },
      lineHeight: {
        'hero-sm': 1.5,
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
