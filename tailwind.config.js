module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundImage: {
      home: "url('/src/assets/home/background-home-desktop.jpg')",
      crew: "url('/src/assets/crew/background-crew-desktop.jpg')",
      destination: "url('/src/assets/destination/background-destination-desktop.jpg')",
      technology: "url('/src/assets/technology/background-technology-desktop.jpg')",
    },
    colors: {
      black: "#0B0D17",
      blue: "#D0D6F9",
      white: "#FFFFFF",
    },
    fontFamily: {
      bellefair: ["'Bellefair Regular'", 'sans-serif'],
      barlow: ["'Barlow Condensed Regular'", 'sans-serif'],
    },
    letterSpacing: {
      h5: '4.75px',
      navText: '2.7px',
      subH2: '2.35px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
