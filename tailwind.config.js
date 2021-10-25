module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        subHeading: "1.75rem",
        bigTitle: "9.375rem",
      },
      screens: {
        xl2: "1440px",
      },
    },
    backgroundImage: {
      home: "url('/src/assets/home/background-home-desktop.jpg')",
      crew: "url('/src/assets/crew/background-crew-desktop.jpg')",
      destination:
        "url('/src/assets/destination/background-destination-desktop.jpg')",
      technology:
        "url('/src/assets/technology/background-technology-desktop.jpg')",
    },
    colors: {
      black: "#0B0D17",
      blue: "#D0D6F9",
      white: "#FFFFFF",
      whiteTransparent: "rgba(255, 255, 255, 0.04)",
    },
    fontFamily: {
      bellefair: ["'Bellefair'", "sans-serif"],
      barlowCondensed: ["'Barlow Condensed'", "sans-serif"],
      barlow: ["'Barlow'", "sans-serif"],
    },
    letterSpacing: {
      h5: "4.75px",
      navText: "2.7px",
      subH2: "2.35px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
