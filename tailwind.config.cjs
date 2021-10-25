const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	theme: {
		colors: {
			white: colors.white,
			gray: colors.warmGray,
			'svelte-prime': '#ff5030',
			'lahs-blue': '#1565c0',
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
