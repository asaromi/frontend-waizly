/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        1: '1px',
        2: '2px',
      },
      height: {
        fhd: '1080px',
        '34.9px': '34.9px',
        '62px': '62px',
        '65px': '65px',
        '73.45px': '73.45px',
        '78.75px': '78.75px',
        '85px': '85px',
      },
      screens: {
        base: '320px',
        xs: '420px',
      },
      spacing: {
        '1.25': '0.3125rem',
        '2.25': '0.5625rem',
        '4.5': '1.125rem',
      },
      width: {
        fhd: '1920px',
        '34.9px': '34.9px',
        '62px': '62px',
        '65px': '65px',
        '73.45px': '73.45px',
        '78.75px': '78.75px',
        '85px': '85px',
      },
    },
    maxHeight: (theme) => ({
      ...theme('height'),
    }),
    maxWidth: (theme) => ({
      ...theme('width'),
    }),
    minHeight: (theme) => ({
      ...theme('height'),
    }),
    minWidth: (theme) => ({
      ...theme('width'),
    }),
  },
  plugins: [],
}

