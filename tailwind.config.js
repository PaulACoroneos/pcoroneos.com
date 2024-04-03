/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      tertiary: "var(--color-tertiary)",
      quaternary: "var(--color-quaternary)",
      quinary: "var(--color-quinary)",
      white: "var(--color-white)",
      terminal: "var(--color-terminal)",
      code: {
        green: "#b5f4a5",
        yellow: "#ffe484",
        purple: "#d9a9ff",
        red: "#ff8383",
        blue: "#93ddfd",
        white: "#fff",
      },
    },
    extend: {
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
        bullets: "line",
        linkColor: [
          "var(--color-secondary)",
          {
            hover: "var(--color-primary)",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
