module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      barlow: ["'Barlow Condensed'"],
      belle: ["Bellefair"],
    },
    extend: {
      colors: {
        pri: {
          100: "#cecfd1",
          200: "#9d9ea2",
          300: "#6d6e74",
          400: "#3c3d45",
          500: "#0b0d17",
          600: "#090a12",
          700: "#07080e",
          800: "#040509",
          900: "#020305",
        },
        sec: {
          100: "#f6f7fe",
          200: "#eceffd",
          300: "#e3e6fb",
          400: "#d9defa",
          500: "#d0d6f9",
          600: "#a6abc7",
          700: "#7d8095",
          800: "#535664",
          900: "#2a2b32",
        },
      },
      backgroundImage: {
        homebgmobile: "url('./assets/home/background-home-mobile.jpg')",
        homebgtablet: "url('./assets/home/background-home-tablet.jpg')",
        homebgdesktop: "url('./assets/home/background-home-desktop.jpg')",
        destbgmobile:
          "url('./assets/destination/background-destination-mobile.jpg')",
        destbgtablet:
          "url('./assets/destination/background-destination-tablet.jpg')",
        destbgdesktop:
          "url('./assets/destination/background-destination-desktop.jpg')",
        crewbgmobile: "url('./assets/crew/background-crew-mobile.jpg')",
        crewbgtablet: "url('./assets/crew/background-crew-tablet.jpg')",
        crewbgdesktop: "url('./assets/crew/background-crew-desktop.jpg')",
        techbgmobile:
          "url('./assets/technology/background-technology-mobile.jpg')",
        techbgtablet:
          "url('./assets/technology/background-technology-tablet.jpg')",
        techbgdesktop:
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
