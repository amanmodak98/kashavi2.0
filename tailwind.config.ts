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
          DEFAULT: "#f97316", // Orange
          dark: "#ea580c",
          light: "#fb923c",
        },
        accent: {
          DEFAULT: "#0ea5e9", // Sky blue
          light: "#38bdf8",
        },
        success: "#10b981",
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        neutral: {
          50: "#fafaf9",
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
        gray: {
          DEFAULT: "#57534e", // neutral-600
          light: "#78716c", // neutral-500
        },
        dark: {
          800: "#292524", // neutral-800
          900: "#1c1917", // neutral-900
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display typography - Editorial and premium
        'display-sm': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '800' }], // 72px
        'display-md': ['5.25rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '800' }], // 84px
        'display-lg': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '800' }], // 96px

        // Heading hierarchy
        'h1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }], // 48px
        'h1-lg': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }], // 64px
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }], // 36px
        'h2-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }], // 48px
        'h3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }], // 24px
        'h3-lg': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }], // 32px

        // Body text
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }], // 18px

        // Small and labels
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }], // 14px
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }], // 12px
        'label-lg': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '600' }], // 13px
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
        "section-xs": "4rem",   // 64px
        "section-sm": "5rem",   // 80px
        "section-md": "6rem",   // 96px
        "section-lg": "7rem",   // 112px
        "section-xl": "8rem",   // 128px
      },
      zIndex: {
        "dropdown": "100",
        "sticky": "200",
        "fixed": "300",
        "modal-backdrop": "400",
        "modal": "500",
        "popover": "600",
        "tooltip": "700",
        "notification": "800",
        "max": "999",
      },
      transitionDuration: {
        "fast": "150ms",
        "normal": "300ms",
        "slow": "500ms",
        "slower": "700ms",
      },
      animation: {
        "float": "float 20s infinite ease-in-out",
        "glow": "glow 2s infinite ease-in-out",
        "pulse-slow": "pulse-slow 2s infinite ease-in-out",
        "scroll-down": "scroll-down 2s infinite ease-in-out",
        "bounce-slow": "bounce-slow 2s infinite ease-in-out",
        "gradient-x": "gradient-x 3s ease infinite",
        "rotate-y-180": "rotate-y-180 0.6s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(50px, -50px, 0) scale(1.1)" },
          "66%": { transform: "translate3d(-50px, 50px, 0) scale(0.9)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.98)" },
        },
        "scroll-down": {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(12px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rotate-y-180": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
