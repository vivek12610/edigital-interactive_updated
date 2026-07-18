import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1240px" }
    },
    extend: {
      colors: {
        paper: "#FAFAF8",
        card: "#FFFFFF",
        ink: {
          DEFAULT: "#121212",
          soft: "#1C1C1C",
          faint: "#6B6B63"
        },
        signal: {
          DEFAULT: "#E5484D",
          light: "#EF6E72",
          dark: "#C63A3E"
        },
        amber: {
          DEFAULT: "#E5484D",
          light: "#EF6E72"
        },
        coral: {
          DEFAULT: "#E5484D",
          dark: "#C63A3E"
        },
        line: "#ECECE8"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      borderRadius: {
        xl: "20px",
        "2xl": "28px",
        "3xl": "36px"
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,18,18,0.03), 0 12px 28px -14px rgba(18,18,18,0.10)",
        lift: "0 24px 48px -20px rgba(18,18,18,0.30)"
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        tick: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        rise: "rise .6s cubic-bezier(.2,.7,.2,1) both",
        tick: "tick 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
