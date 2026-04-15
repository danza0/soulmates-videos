import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        ivory: "#F5F0E8",
        "rose-gold": "#B8A89A",
        champagne: "#D4C4B5",
        charcoal: "#2C2825",
        "warm-gray": "#6B635B",
        taupe: "#9A9189",
        border: "#E8E2D9",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      spacing: {
        "4dp": "0.25rem",
        "8dp": "0.5rem",
        "12dp": "0.75rem",
        "16dp": "1rem",
        "24dp": "1.5rem",
        "32dp": "2rem",
        "48dp": "3rem",
        "64dp": "4rem",
        "96dp": "6rem",
      },
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1024px",
        wide: "1440px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;