/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#171719",
        primary: "#7C83FF",
        secondary: "#00C2FF",
        outline: "#262626",
        textPrimary: "#F9FAFB",
        textSecondary: "#94A3B8",
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        glow: "0px 0px 20px rgba(99, 102, 241, 0.15)",
      },

      maxWidth: {
        container: "1280px",
      },
    },
  },

  plugins: [],
};
