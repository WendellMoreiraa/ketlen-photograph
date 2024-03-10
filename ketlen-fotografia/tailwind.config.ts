import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      body: ['Questrial', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      prymary: {
        100: '#778A70'
      },
      gray: {
        100: '#F8F8F8',
        200: '#D9D9D9',
        900: '#1a202c'
      }
    }
  },
  plugins: []
};
export default config;
