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
        /* ─── OutsourceTel Corporate Brand System ─── */
        navy: {
          DEFAULT: "#111111",
          deep: "#0a0a0a",
          surface: "#1a1a1a",
          glow: "#2a2020",
          50: "#F5F0F0",
          100: "#E6DADA",
          200: "#CFBABA",
          300: "#B89A9A",
          400: "#8A6060",
          500: "#5C3030",
          600: "#3D1818",
          700: "#2A1010",
          800: "#1A0808",
          900: "#111111",
        },
        teal: {
          DEFAULT: "#DC2626",
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        gold: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        cyan: {
          DEFAULT: "#DC2626",
          glow: "rgba(220, 38, 38, 0.4)",
        },
        lavender: {
          DEFAULT: "#BE185D",
          glow: "rgba(190, 24, 93, 0.4)",
        },
        mint: {
          DEFAULT: "#F87171",
          glow: "rgba(248, 113, 113, 0.4)",
        },
        coral: {
          DEFAULT: "#FF6B6B",
        },
        "neon-teal": "#00F5FF",
        "neon-blue": "#3B82F6",
        "neon-purple": "#8B5CF6",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(220, 38, 38, 0.2)" },
          "50%": { boxShadow: "0 0 50px rgba(220, 38, 38, 0.5)" },
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
        "navy-gradient": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        "teal-gradient": "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
        "gold-gradient": "linear-gradient(135deg, #F59E0B 0%, #FF6B6B 100%)",
        "hero-gradient": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
        "vivid-gradient": "linear-gradient(135deg, #DC2626 0%, #BE185D 50%, #F59E0B 100%)",
      },
      boxShadow: {
        "glow-teal": "0 0 30px rgba(220, 38, 38, 0.3)",
        "glow-lavender": "0 0 30px rgba(190, 24, 93, 0.3)",
        "glow-gold": "0 0 30px rgba(245, 158, 11, 0.3)",
        "navy-xl": "0 25px 50px rgba(10, 10, 10, 0.5)",
        card: "0 4px 20px rgba(17, 17, 17, 0.08)",
        "card-hover": "0 20px 60px rgba(220, 38, 38, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;