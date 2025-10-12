const { heroui } = require("@heroui/react")

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#e2d4bb",
            primary: {
              foreground: "#e2d4bb",
              DEFAULT: "#081c3f",
            },
            secondary: {
              foreground: "#081c3f",
              DEFAULT: "#e2d4bb",
            },
          },
        },
        dark: {
          colors: {
            background: "#081c3f",
            primary: {
              foreground: "#081c3f",
              DEFAULT: "#e2d4bb",
            },
            secondary: {
              foreground: "#e2d4bb",
              DEFAULT: "#081c3f",
            },
          },
        },
      },
    }),
  ],
}
