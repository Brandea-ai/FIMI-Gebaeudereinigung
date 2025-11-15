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
        'fimi-navy': '#012956',
        'fimi-turquoise': '#109387',
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '4px',
        'lg': '6px',
      },
    },
  },
  plugins: [],
}
export default config
