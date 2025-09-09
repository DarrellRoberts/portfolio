const { heroui } = require("@heroui/react")

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#081c3f",
            },
          },
        },
        dark: {
          colors: {
            background: "#081c3f",
            primary: {
              foreground: "#081c3f",
              DEFAULT: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
}
