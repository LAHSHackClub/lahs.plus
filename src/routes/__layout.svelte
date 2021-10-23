<script>
	// set css to light theme

	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<NavBar />
<slot />
<Footer />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
