import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e88e5",
          dark: "#1565c0",
          light: "#4ba3ff",
        },
        accent: {
          DEFAULT: "#0ea5e9",
          light: "#38bdf8",
        },
        success: "#10b981",
        brand: {
          50:  "#f0f7ff",
          100: "#e0efff",
          200: "#b8dcff",
          300: "#7ec1ff",
          400: "#4ba3ff",
          500: "#1e88e5",
          600: "#1565c0",
          700: "#0f4f9e",
          800: "#0a2f5f",
        },
        neutral: {
          50:  "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        ink: {
          100: "#f5f5f4",
          200: "#e7e5e4",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          900: "#1c1917",
        },
        line: "#e7e5e4",
        canvas: "#f8fcff",
        gray: {
          DEFAULT: "#57534e",
          light: "#78716c",
        },
        dark: {
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
        narrow: "960px",
        wide: "1400px",
      },
      fontSize: {
        'display-sm': ['clamp(2.5rem, 1.5rem + 4vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display':    ['clamp(3rem, 1.75rem + 5.5vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-lg': ['clamp(3.5rem, 2rem + 7vw, 6rem)', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '800' }],
        'h1':  ['clamp(2.25rem, 1.5rem + 3.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '700' }],
        'h2':  ['clamp(1.75rem, 1.25rem + 2.4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h3':  ['clamp(1.25rem, 1.1rem + 0.8vw, 1.625rem)', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h4':  ['clamp(1.05rem, 0.95rem + 0.4vw, 1.25rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.55', fontWeight: '500' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.04em',
        wider: '0.05em',
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.25',
        normal: '1.5',
        relaxed: '1.6',
        loose: '1.7',
      },
      spacing: {
        "section-xs": "4rem",
        "section-sm": "5rem",
        "section-md": "6rem",
        "section-lg": "7rem",
        "section-xl": "8rem",
      },
      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },
      zIndex: {
        base: "1",
        elevated: "10",
        sticky: "30",
        nav: "50",
        overlay: "60",
        modal: "70",
        toast: "80",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "220ms",
        slow: "400ms",
        slower: "600ms",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "float-soft": "float-soft 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "drift": "drift 16s ease-in-out infinite",
      },
      keyframes: {
        "float-soft": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%":   { transform: "translate3d(0, 0, 0)" },
          "33%":  { transform: "translate3d(28px, -28px, 0)" },
          "66%":  { transform: "translate3d(-22px, 22px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "warm-mesh":
          "radial-gradient(at 15% 10%, rgba(75, 163, 255, 0.10) 0px, transparent 55%), radial-gradient(at 85% 25%, rgba(14, 165, 233, 0.06) 0px, transparent 55%), radial-gradient(at 60% 90%, rgba(184, 220, 255, 0.20) 0px, transparent 55%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 4px 16px -4px rgba(0,0,0,0.06)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.06)",
        lift: "0 4px 12px -4px rgba(0,0,0,0.06), 0 16px 40px -12px rgba(0,0,0,0.10)",
        "brand-soft": "0 1px 2px rgba(0,0,0,0.05), 0 8px 24px -8px rgba(21, 101, 192, 0.30)",
        "brand-lift": "0 1px 2px rgba(0,0,0,0.05), 0 12px 32px -8px rgba(21, 101, 192, 0.40)",
      },
    },
  },
  plugins: [],
};

export default config;
