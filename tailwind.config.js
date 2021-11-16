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
        'sec-green': '#55970C',
        'sec-blue': '#0C9793',
        'sec-purple': '#4E0C97',
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
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
