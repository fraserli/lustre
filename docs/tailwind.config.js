export default {
  content: ["./index.html", "./src/**/*.{mjs,gleam}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};