import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'lights' : "url('/img/bgv8.svg')",
        'phone' : "url('/img/bg-phone.svg')",
      },
      screens: {
        'xsm': '50px',
        'sm': '640px',
        'md': '768px',
        'xl': '1024px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
export default config
