import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#eef2f4',
        night: '#13232e',
        moss: {
          DEFAULT: '#1a6a58',
          deep: '#145246',
        },
        brass: '#c3922e',
        mist: '#53646d',
        line: '#c5d0d6',
        chalk: '#f7f9fa',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
      boxShadow: {
        lift: '0 18px 40px rgba(19, 35, 46, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
