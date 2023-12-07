// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        // Add your existing color definitions from themes.css
        text: "var(--color-text)",
        "text-offset": "var(--color-text-offset)",
        background: "var(--color-background)",
        "background-offset": "var(--color-background-offset)",
        border: "var(--color-border)",
        // Add other custom color definitions as needed
        "heading-text": "var(--color-heading-text)", // Custom heading text color
      },
      textColor: {
        // Add your existing text color definitions from themes.css
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
        prose: {
          DEFAULT: "var(--color-text)", // Adjust text color
          "h2": "var(--color-heading-text)", // Adjust heading text color
        },
      },
      backgroundColor: {
        // Add your existing background color definitions from themes.css
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        // Add your existing border color definitions from themes.css
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require("tailwindcss-fluid-type"), // Your existing plugin
    require('@tailwindcss/typography'), // Add the @tailwindcss/typography plugin
    // ... other plugins
  ],
};
