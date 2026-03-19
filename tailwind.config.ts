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
        // OutsourceTel Brand Colors
        navy: {
          DEFAULT: "#0A1A2F",
          light: "#1E3A5F",
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
          DEFAULT: "#00A7B5",
          50: "#E0F7F9",
          100: "#B3ECF0",
          200: "#80DFE7",
          300: "#4DD2DE",
          400: "#26C7D6",
          500: "#00A7B5",
          600: "#008F9C",
          700: "#007380",
          800: "#005A65",
          900: "#00454F",
        },
        gold: {
          DEFAULT: "#FFB800",
          50: "#FFF9E0",
          100: "#FFEFB3",
          200: "#FFE480",
          300: "#FFD94D",
          400: "#FFD01A",
          500: "#FFB800",
          600: "#E6A600",
          700: "#CC9400",
          800: "#B38200",
          900: "#996F00",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
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
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 167, 181, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 167, 181, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "counter-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
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
        "counter-up": "counter-up 0.5s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "navy-gradient": "linear-gradient(135deg, #0A1A2F 0%, #1E3A5F 100%)",
        "teal-gradient": "linear-gradient(135deg, #00A7B5 0%, #0082A0 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)",
        "hero-gradient": "linear-gradient(135deg, #0A1A2F 0%, #1E3A5F 50%, #0A1A2F 100%)",
      },
      boxShadow: {
        "glow-teal": "0 0 30px rgba(0, 167, 181, 0.3)",
        "glow-gold": "0 0 30px rgba(255, 184, 0, 0.3)",
        "navy-xl": "0 25px 50px rgba(10, 26, 47, 0.4)",
        card: "0 4px 20px rgba(10, 26, 47, 0.08)",
        "card-hover": "0 20px 60px rgba(0, 167, 181, 0.15)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;