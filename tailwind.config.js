/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
      },
      backgroundColor: {
        primary: "#1a1e2e",
        secondary: "#2b3047",
      },
      fontFamily: {
        primary:
          "Inter,Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif",
      },
      screens: {
        xs: "475px",
      },
      animation: {
        "wave-hand": "wave-hand 1.5s infinite",
      },
      keyframes: {
        "wave-hand": {
          "0%, 100%": {
            transform: "rotate(30deg)",
          },
          "50%": {
            transform: "rotate(-10deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
