<script>
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	export function darkToggle() {
		if (localStorage.getItem('theme') === 'dark') {
			localStorage.setItem('theme', 'light');
			document.documentElement.setAttribute('data-theme', 'light');
		} else {
			localStorage.setItem('theme', 'dark');
			document.documentElement.setAttribute('data-theme', 'dark');
		}
	}
</script>

<NavBar />
<slot />
<Footer />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
