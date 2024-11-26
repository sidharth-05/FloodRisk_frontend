/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        deepskyblue: {
          "100": "#52b4e9",
          "200": "#00b8e0",
        },
        steelblue: {
          "100": "#009bbe",
          "200": "#155586",
        },
        "text-clr": "#5e6282",
        "text-color": "#39425d",
        dimgray: "rgba(102, 102, 102, 0.75)",
        gainsboro: "rgba(217, 217, 217, 0)",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "open-sans-hebrew": "'Open Sans Hebrew'",
        laila: "Laila",
        montserrat: "Montserrat",
        inherit: "inherit",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
        "8xs": "5px",
        "12xs": "1px",
      },
    },
    fontSize: {
      "13xl": "32px",
      base: "16px",
      "5xl": "24px",
      "21xl": "40px",
      "29xl": "48px",
      lg: "18px",
      mid: "17px",
      sm: "14px",
      "45xl": "64px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
