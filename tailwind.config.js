const {
  default: flattenColorPalette,
} = require("./node_modules/tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white-glow': '0 0 30px 10px rgba(255, 255, 255, 0.7)',
        'sky-glow': '0 0 30px 10px rgba(0, 191, 255, 0.7)',
        'green-glow': '0 0 30px 10px rgba(0, 255, 0, 0.7)',
        'red-glow': '0 0 30px 10px rgba(255, 0, 0, 0.7)',
        'pink-glow': '0 0 30px 10px rgba(255, 20, 147, 0.7)',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        scroll: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

