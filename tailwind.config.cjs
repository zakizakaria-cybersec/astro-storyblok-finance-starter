/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'adamina': ['Adamina', 'sans-serif'],
      },
      colors: {
        primary: '#193EAF',
        border: '#e3e3e333'
      },
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
