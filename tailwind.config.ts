import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#224c87",
        brandRed: "#da3832",
        brandGrey: "#919090"
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "Verdana", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
} satisfies Config;
