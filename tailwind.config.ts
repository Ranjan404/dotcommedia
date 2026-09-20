import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8faf9',
        night: '#0c1f2e',
        moss: {
          DEFAULT: '#0d7c5f',
          deep: '#095e48',
        },
        brass: '#d4a745',
        mist: '#5b7080',
        line: '#d4dde2',
        chalk: '#f1f5f3',
        accent: '#2eb88a',
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
      boxShadow: {
        lift: '0 20px 44px rgba(13, 124, 95, 0.16)',
      },
    },
  },
  plugins: [],
};

export default config;