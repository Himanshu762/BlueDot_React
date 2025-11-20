/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      colors: {
        // Brand Colors
        background: {
          DEFAULT: '#F4EBD6',
          light: '#FAF6ED',
          dark: '#EDE4CB',
        },
        golden: {
          50: '#FEF9E7',
          100: '#FDF3CF',
          200: '#FCE79F',
          300: '#FADB6F',
          400: '#F9CF3F',
          500: '#e8bb49', // Primary golden (Updated)
          600: '#D49A0F',
          700: '#A0750B',
          800: '#6C5008',
          900: '#382B04',
        },
        ocean: {
          50: '#EBF3FE',
          100: '#D7E7FD',
          200: '#AFCFFB',
          300: '#87B7F9',
          400: '#5F9FF7',
          500: '#3c4faf', // Primary blue (Updated)
          600: '#2C4090',
          700: '#21306C',
          800: '#162048',
          900: '#0B1024',
        },
        // Nature-inspired accents
        earth: {
          DEFAULT: '#8B7355',
          light: '#B89B7F',
          dark: '#5C4A38',
        },
        leaf: {
          DEFAULT: '#7BA05B',
          light: '#9BC47B',
          dark: '#5A7543',
        },
        water: {
          DEFAULT: '#5B9EA0',
          light: '#7EBEC0',
          dark: '#447578',
        },
        // Legacy support (map old colors to new system)
        beige: {
          50: '#faf8f4',
          100: '#f7f4ec',
          200: '#F4EBD6',
          DEFAULT: '#F4EBD6',
        },
        forest: {
          DEFAULT: 'rgb(19, 38, 27)',
          light: 'rgb(94, 107, 100)',
        },
        gold: {
          DEFAULT: '#F0B825',
        },
        cream: '#FAF6ED',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #F0B825 0%, #3750B4 100%)',
        'organic-blob': 'radial-gradient(ellipse at 50% 50%, #F0B825 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'magnetic': 'magnetic 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--magnetic-x), var(--magnetic-y))' },
        },
      },
    },
  },
  plugins: [],
}
