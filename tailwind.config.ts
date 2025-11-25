import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // FIMI CI Farben
        'fimi-navy': {
          DEFAULT: '#012956',
          50: '#E6EBF2',
          100: '#C2D1E3',
          200: '#8BA8C9',
          300: '#5480B0',
          400: '#2A5A8F',
          500: '#012956',
          600: '#012148',
          700: '#01193A',
          800: '#00112C',
          900: '#00091E',
        },
        'fimi-turquoise': {
          DEFAULT: '#109387',
          50: '#E8F5F4',
          100: '#C5E8E5',
          200: '#8FD4CE',
          300: '#59C0B7',
          400: '#2EADA1',
          500: '#109387',
          600: '#0D7A70',
          700: '#0A6159',
          800: '#074842',
          900: '#042F2B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Fluid Typography
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['clamp(1.125rem, 1.5vw, 1.375rem)', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.7' }],
      },
      spacing: {
        'section': 'clamp(80px, 12vw, 160px)',
        'container-x': 'clamp(16px, 5vw, 80px)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(1, 41, 86, 0.08)',
        'glass-lg': '0 16px 48px rgba(1, 41, 86, 0.12)',
        'card': '0 4px 24px rgba(1, 41, 86, 0.06)',
        'card-hover': '0 12px 40px rgba(1, 41, 86, 0.12)',
        'nav': '0 4px 20px rgba(1, 41, 86, 0.08)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'text-rotate': 'textRotate 12s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        textRotate: {
          '0%, 10%': { opacity: '1', transform: 'translateY(0)' },
          '12.5%, 22.5%': { opacity: '0', transform: 'translateY(-100%)' },
          '25%, 35%': { opacity: '1', transform: 'translateY(0)' },
          '37.5%, 47.5%': { opacity: '0', transform: 'translateY(-100%)' },
          '50%, 60%': { opacity: '1', transform: 'translateY(0)' },
          '62.5%, 72.5%': { opacity: '0', transform: 'translateY(-100%)' },
          '75%, 85%': { opacity: '1', transform: 'translateY(0)' },
          '87.5%, 97.5%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
export default config
