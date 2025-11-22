/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
          DEFAULT: 'var(--bg-primary)',
          light: 'var(--bg-secondary)',
          dark: '#EDE4CB',
        },
        // Custom Dark Mode Colors
        dark: {
          bg: '#0C142B',
          card: 'var(--bg-card)', // Mapped to CSS variable
          text: {
            primary: '#F5F0E1',
            secondary: '#F3EBC0',
            tertiary: '#F3EBD4',
            highlight: '#F5EBBC',
          }
        },
        // Semantic Colors
        card: 'var(--bg-card)',
        border: 'var(--border-card)',
        // ... (keeping other colors)
        forest: {
          DEFAULT: 'var(--text-primary)',
          light: 'var(--text-secondary)',
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
