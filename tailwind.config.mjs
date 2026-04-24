/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        cream: '#FFF8EE',
        berry: '#FF6F8E',
        caramel: '#D8A15A',
        placeholder: '#1A1A1B'
      },
      fontFamily: {
        display: ['"Bagel Fat One"', 'system-ui', 'sans-serif'],
        jp: ['"Zen Maru Gothic"', 'system-ui', 'sans-serif'],
        en: ['"DM Sans"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        soft: '8px',
        card: '12px'
      }
    }
  },
  plugins: []
};
