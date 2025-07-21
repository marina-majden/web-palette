/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "TYPE YOUR CUSTOM PATH HERE"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['peer-checked', 'peer-hover'],
      borderColor: ['peer-checked', 'peer-hover'],
      // etc. for other peer states you need
    }
  }
}

