module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#153250',
        secondary: '#970C10',
        tertiary: '#ADD3D0',
        quaternary: '#FEFCFF',
      },
      inset: {
        18: '4.5rem',
      },
      height: {
        18: '4.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
