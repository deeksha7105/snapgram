/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "#877EFF",
          500: "#877EFF",
        },

        light: {
          1: "#FFFFFF",
          2: "#EFEFEF",
          3: "#7878A3",
          4: "#5C5C7B",
        },

        dark: {
          1: "#000000",
          2: "#09090A",
          3: "#101012",
          4: "#1F1F22",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      screens: {
        xs: "480px",
      },

      width: {
        465: "465px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};