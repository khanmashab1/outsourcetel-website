import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* ─── OutsourceTel Vivid Brand System ─── */
        navy: {
          DEFAULT: "#0A1A2F",
          deep: "#040C18",
          surface: "#122340",
          glow: "#1A3050",
          50: "#E8EDF5",
          100: "#C5D2E6",
          200: "#9DAFCF",
          300: "#748CB8",
          400: "#4D6EA5",
          500: "#1E3A5F",
          600: "#172F4E",
          700: "#10243D",
          800: "#091928",
          900: "#0A1A2F",
        },
        teal: {
          DEFAULT: "#06D6E0",
          50: "#E0FBFC",
          100: "#B3F5F7",
          200: "#80EEF2",
          300: "#4DE7ED",
          400: "#26E1E9",
          500: "#06D6E0",
          600: "#00B4C6",
          700: "#0095A3",
          800: "#007580",
          900: "#005A63",
        },
        gold: {
          DEFAULT: "#FF9F1C",
          50: "#FFF5E0",
          100: "#FFE6B3",
          200: "#FFD780",
          300: "#FFC84D",
          400: "#FFBA26",
          500: "#FF9F1C",
          600: "#E68A00",
          700: "#CC7A00",
          800: "#B36B00",
          900: "#995C00",
        },
        cyan: {
          DEFAULT: "#06D6E0",
          glow: "rgba(6, 214, 224, 0.4)",
        },
        lavender: {
          DEFAULT: "#7C5CFC",
          glow: "rgba(124, 92, 252, 0.4)",
        },
        mint: {
          DEFAULT: "#2CEAA3",
          glow: "rgba(44, 234, 163, 0.4)",
        },
        coral: {
          DEFAULT: "#FF6B6B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6, 214, 224, 0.2)" },
          "50%": { boxShadow: "0 0 50px rgba(6, 214, 224, 0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "navy-gradient": "linear-gradient(135deg, #040C18 0%, #122340 100%)",
        "teal-gradient": "linear-gradient(135deg, #06D6E0 0%, #00B4C6 100%)",
        "gold-gradient": "linear-gradient(135deg, #FF9F1C 0%, #FF6B6B 100%)",
        "hero-gradient": "linear-gradient(135deg, #040C18 0%, #122340 50%, #040C18 100%)",
        "vivid-gradient": "linear-gradient(135deg, #06D6E0 0%, #7C5CFC 50%, #FF9F1C 100%)",
      },
      boxShadow: {
        "glow-teal": "0 0 30px rgba(6, 214, 224, 0.3)",
        "glow-lavender": "0 0 30px rgba(124, 92, 252, 0.3)",
        "glow-gold": "0 0 30px rgba(255, 159, 28, 0.3)",
        "navy-xl": "0 25px 50px rgba(4, 12, 24, 0.5)",
        card: "0 4px 20px rgba(10, 26, 47, 0.08)",
        "card-hover": "0 20px 60px rgba(6, 214, 224, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;