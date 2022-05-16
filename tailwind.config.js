module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      wide: "1440px",
    },
    colors: {
      transparent: "transparent",
      primary: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
      },
      neutral: {
        veryVarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
      },
      error: "hsl(354, 71%, 53%)",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 20px 25px -12px hsl(26, 100%, 55%)",
      },
      fontFamily: {
        kumbhSans: ["Kumbh Sans", "sans-serif"],
      },
      animation: {
        zoom: "zoom .3s ease-in-out",
        popup: "popup .3s ease-in-out",
        fadein: "fadein .3s ease-in-out",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(.5)" },
          "100%": { transform: "scale(1)" },
        },
        popup: {
          "0%": { transform: "translate(0, -50px)", opacity: ".5" },
          "100%": { transform: "translate(0)", opacity: "1" },
        },
        fadein: {
          "0%": { opacity: ".5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
