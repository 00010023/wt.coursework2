const defaultTheme = require("tailwindcss/defaultTheme"); // eslint-disable-line

module.exports = {
  darkMode: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      mono: [
        "Menlo",
        "Monaco",
        '"Lucida Console"',
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      width: {
        72: "18rem",
      },
    },
  },
  plugins: [require("@tailwindcss/ui"), require("tailwindcss-hyphens")],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./components/**/*.jsx", "./pages/**/*.jsx"],
  },
};
