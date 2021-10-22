const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: 'class',
	theme: {
		colors: {
			white: colors.white,
			gray: colors.warmGray,
			'svelte-prime': '#ff5030',
			'lahs-blue': '#1565c0',
			'lahs-blue-hover': '#1d5699'
		}
	},
	defaultTheme: {
		extend: {
			colors: {
				white: colors.white,
				gray: colors.warmGray,
				'svelte-prime': '#ff5030',
				'lahs-blue': '#1565c0',
				'lahs-blue-hover': '#1d5699'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
