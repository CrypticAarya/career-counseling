/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f0e6",
        foreground: "#1a1a1a",
        primary: {
          DEFAULT: "#1a472a", // Forest Green
          dark: "#0d2b1a",
          light: "#2a5d3d",
        },
        secondary: {
          DEFAULT: "#8b1c3f", // Royal Burgundy
          dark: "#6a142f",
          light: "#a42a4d",
        },
        accent: {
          gold: "#c9a227",
          stone: "#4a4a4a",
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}

