import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#E8EBFF',
				'secondary': '#6572FF',
				'accent': '#7480A7',
				'text': '#2A2A3E',
				'dk-primary': '#39406B',
				'dk-secondary': '#8B9AFF',
				'dk-accent': '#7D8FB7',
				'dk-text': '#A0A0B3',
			}
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}
