import adapter from '@sveltejs/adapter-node';
import postcss from 'postcss';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: true,
		postcss: true,
		plugins: [
			postcss({
				plugins: ['autoprefixer', 'tailwindcss']
			})
		]
	}),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter()
	}
};

export default config;
