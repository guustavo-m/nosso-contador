/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        sans: ['"Quicksand"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: "var(--text)",
        muted: "var(--muted)",
        card: "var(--card)",
        line: "var(--border)",
        rose: "#ff4d7e",
      },
      boxShadow: {
        glow: "0 0 24px var(--glow)",
      },
      keyframes: {
        rise: {
          "0%": { transform: "translate(0,0) rotate(0)", opacity: "0" },
          "10%": { opacity: ".85" },
          "100%": { transform: "translate(var(--dx),-110vh) rotate(var(--rot))", opacity: "0" },
        },
        twinkle: {
          "0%,100%": { opacity: ".1", transform: "scale(.6)" },
          "50%": { opacity: ".9", transform: "scale(1.4)" },
        },
        beat: {
          "0%,100%": { transform: "scale(1)" },
          "15%": { transform: "scale(1.25)" },
          "30%": { transform: "scale(1)" },
          "45%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        rise: "rise linear forwards",
        twinkle: "twinkle 3s ease-in-out infinite",
        beat: "beat 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
