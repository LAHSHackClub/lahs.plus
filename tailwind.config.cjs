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
		},
		screens: {
			sm: { min: '260', max: '767px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1024px', max: '1279px' },
			xl: { min: '1280px', max: '1535px' },
			'2xl': { min: '1536px' }
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
