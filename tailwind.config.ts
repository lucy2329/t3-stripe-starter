import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#3949AB",
        "brand-secondary": "#2d3748",
      },
    },
  },
  plugins: [],
} satisfies Config;
