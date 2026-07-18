/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a0e27',
          dark: '#050818',
          light: '#1a1f3a',
        },
        neon: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          emerald: '#10b981',
          cyan: '#06b6d4',
          pink: '#ec4899',
          orange: '#f97316',
          yellow: '#eab308',
          indigo: '#6366f1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-slower': 'floatSlower 8s ease-in-out infinite',
        'float-icon': 'floatIcon 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(15px, -15px)' },
          '50%': { transform: 'translate(-10px, 10px)' },
          '75%': { transform: 'translate(10px, 15px)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-20px, 20px)' },
          '66%': { transform: 'translate(20px, -20px)' },
        },
        floatIcon: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
      },
    },
  },
  plugins: [],
}
