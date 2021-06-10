const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lightRed: "#FF525D",
        grdLightRed: "#FF3D54",
        grdVLightRed: "#FF8F70",
        veryDarkBlue: "#1F3F5B",
        veryDarkGrayBlue: "#2C2D3F",
        veryDarkDesatBlue: "#3F4164",
        footerDarkBlue: "#25252D",
      },
      borderRadius: {
        veryLarge: "70px",
      },
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
      scale: {
        200: "2",
      },
      screens: {
        desktop: "950px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
