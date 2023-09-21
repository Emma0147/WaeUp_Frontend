/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        secondary: 'rgb(11 11 135)',
        primaryBg: 'var(--primary-bg-color)',
        secondaryBg: 'var(--secondary-bg-color)',
        goldColor: 'var(--gold-color)',
        primaryText: 'var(--primary-text-color)',
        secondaryBg2: 'var(--secondary-bg-color-2)',
        primaryCta: 'var(--primary-cta-color)'
        // disabledColor: 'var(--disabled-gold-color)'
      }
    }
  },
  plugins: []
};
