module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    mode: 'all',
    preserveHtmlElements: false,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          200: '#ABCEE3',
          300: '#E5F3F3',
          400: '#4D4D4D',
          500: '#008488',
          600: '#77C0B0',
          700: '#005c5f',
        },
        secondary: {
          200: '#ABCEE3',
          300: '#E5F3F3',
          400: '#4D4D4D',
          500: '#008488',
          600: '#77C0B0',
          700: '#005c5f',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
