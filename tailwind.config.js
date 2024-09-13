/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      colors: {
        navy: '#1E3A8A', // Dark navy for the background
        'navy-light': '#3B82F6', // A lighter navy, if needed
        yellow: {
          500: '#FBBF24', // Accent yellow
          400: '#F59E0B', // Hover yellow
        },
        gray: {
          200: '#E5E7EB', // Light gray for text and inactive links
        },
      },
    },
  },
  plugins: [],
}