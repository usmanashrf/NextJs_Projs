/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {spacing: {
      '13': '3.25rem',
      '15': '3.75rem',
      '20': '5.5rem',
      '50': '9rem',
      '60': '12rem',
      '70': '16rem',
      '80': '20rem',
      '96': '24rem',
      '110': '28rem',
      '128': '32rem',
      '144': '36rem',
    },
  },
  },
  plugins: [],
}
