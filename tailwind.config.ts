import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        calligraphy: ['"Playfair Display"', 'serif'],
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        accent: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        obsidian: {
          50: '#f5f5f6',
          100: '#e6e6e8',
          200: '#cfd0d4',
          300: '#adaeb5',
          400: '#84858f',
          500: '#696a74',
          600: '#5a5a63',
          700: '#4c4d54',
          800: '#434349',
          900: '#3b3b40',
          950: '#0a0a0c',
        },
        ivory: {
          50: '#fefef9',
          100: '#fdfcf0',
          200: '#faf7de',
          300: '#f5f0c4',
          400: '#eee5a2',
          500: '#e5d67e',
          600: '#d5be5a',
          700: '#b39a42',
          800: '#937d38',
          900: '#796631',
          950: '#423618',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        sage: {
          400: '#86b89e',
          500: '#5e9c7c',
          600: '#4a8266',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(244, 63, 94, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(244, 63, 94, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
