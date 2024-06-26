/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        0: '0',
      },
      fontFamily: {
        anton: ['Anton']
      },
      colors: {
        'brown': '#151304',
        'yellow':'#FFD446'
        
      }

    },
  },
  plugins: [],
}

