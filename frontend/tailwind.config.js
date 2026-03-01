/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* BRAND */
        primary: {
          DEFAULT: '#2563EB', // Blue-600
          foreground: '#ffffff',
        },

        accent: {
          DEFAULT: '#06B6D4', // Cyan-500
          foreground: '#ffffff',
        },

        /* BACKGROUND SYSTEM */
        background: '#0F172A', // Slate-900
        foreground: '#F8FAFC', // Slate-50

        card: '#1E293B', // Slate-800
        'card-foreground': '#F8FAFC',

        secondary: '#1E293B',
        'secondary-foreground': '#CBD5E1',

        muted: '#334155',
        'muted-foreground': '#94A3B8',

        border: '#334155',
        input: '#1E293B',

        ring: '#2563EB',
      },

      backgroundImage: {
        'gradient-primary':
          'linear-gradient(90deg, #2563EB 0%, #06B6D4 100%)',
      },
    },
  },
  plugins: [],
};