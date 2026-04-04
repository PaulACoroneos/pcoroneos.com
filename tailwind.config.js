const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{astro,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "var(--color-primary)",
      "primary-hover": "var(--color-primary-hover)",
      secondary: "var(--color-secondary)",
      tertiary: "var(--color-tertiary)",
      quaternary: "var(--color-quaternary)",
      quinary: "var(--color-quinary)",
      bg: "var(--color-bg)",
      surface: "var(--color-surface)",
      header: "var(--color-header)",
      "text-primary": "var(--color-text)",
      "text-muted": "var(--color-text-muted)",
      border: "var(--color-border)",
      white: "var(--color-white)",
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
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        display: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            fontSize: "1.125rem",
            lineHeight: "1.65",
            color: "var(--color-text)",
            a: {
              color: "var(--color-primary)",
              "&:hover": {
                color: "var(--color-primary-hover)",
              },
            },
            strong: {
              color: "var(--color-text)",
            },
            h1: {
              color: "var(--color-text)",
            },
            h2: {
              color: "var(--color-text)",
            },
            h3: {
              color: "var(--color-text)",
            },
            h4: {
              color: "var(--color-text)",
            },
            blockquote: {
              color: "var(--color-text-muted)",
              borderLeftColor: "var(--color-primary)",
            },
            code: {
              color: "var(--color-text)",
            },
            "ol > li::marker": {
              color: "var(--color-text-muted)",
            },
            "ul > li::marker": {
              color: "var(--color-text-muted)",
            },
            hr: {
              borderColor: "var(--color-border)",
            },
            thead: {
              borderBottomColor: "var(--color-border)",
            },
            "tbody tr": {
              borderBottomColor: "var(--color-border)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
