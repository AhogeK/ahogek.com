/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mplus': ['M PLUS Rounded 1c', 'Verdana', 'sans-serif']
      },
      mplus: [
        'M PLUS Rounded 1c',
        'Verdana',
        'sans-serif'
      ]
    }
  },
  plugins: []
}

