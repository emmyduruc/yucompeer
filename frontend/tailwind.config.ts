import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#202938',
      },
      fontFamily: {
        gluten: ['Gluten'],
        monsterrat: ['Montserrat'],
        lora: ['Lora'],
        roboto: ['"Roboto Condensed", sans-serif'],
      },
      backgroundImage: {
        'desktop-background': "url('/images/desktop-landing-bg.png')",
        'mobile-background': "url('/images/mobile-landing-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
