/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {},
    keyframes: {
      "slide-bg-color": {
        "0%": { transform: "scaleY(0)" },
        "50%": { transform: "scaleY(0.5)" },
        "100%": { transform: "scaleY(1)" },
      },
    },
    animation: {
      "slide-bg-color":
        "slide-bg-color color:#147efb 0.5s ease-in-out forwards",
    },
    /*     animation: {
      "color-delay": "slide-bg-color color:#147efb transition: all 0.3s",
    }, */
  },
  plugins: [],
};
