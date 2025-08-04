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
      },      
    },
	},
	plugins: [],
}



//   /* Colors */
//   --color-primary: #042b57;
//   --color-primary-foreground: #ffffff;
//   --color-secondary: #c5b3a5;
//   --color-secondary-foreground: #fff;
//   --color-accent: #d3a56c;
//   --color-accent-foreground: #fff;
//   --color-card: #f4eee1;
//   --color-card-foreground: var(--color-primary);
  
//   --color-white: #fff;
//   --color-black: #000;

//   --color-muted: #c5b3a5;

//   --color-border: #a9a9a9;

//   /* Transitions */
//   --transition-fast: 0.15s ease-in-out;
//   --transition-normal: 0.3s ease-in-out;
//   --transition-slow: 0.5s ease-in-out;

//   /* Zindex */
//   --z-index-base: 0;
//   --z-index-header: 10;
//   --z-index-dropdown: 20;
//   --z-index-modal: 30;
//   --z-index-toast: 40;
//   --z-index-max: 50;