/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosa-50': '#FFF0F5',
        'rosa-100': '#FFE4E1',
        'rosa-200': '#FFB6C1',
        'rosa-300': '#FF69B4',
        'rosa-400': '#FF1493',
        'rosa-500': '#C71585',
        'rosa-600': '#DB7093',
        'rosa-700': '#FF69B4',
        'rosa-800': '#FF1493',
        'rosa-900': '#C71585',
        'beige-100': '#F5F5DC',
      },
      fontFamily: {
        'cormorant-sc': ['Cormorant SC', 'serif'],
        'cormorant-unicase': ['Cormorant Unicase', 'serif'],
        'whisper': ['Whisper', 'cursive'],
      },
      boxShadow: {
        'pink-lg': '0 10px 15px -3px rgba(255, 105, 180, 0.1), 0 4px 6px -2px rgba(255, 105, 180, 0.05)',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'wave': 'wave 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
