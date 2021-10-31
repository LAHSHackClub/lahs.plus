<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import MobileSidebar from '../components/MobileSidebar.svelte';
	import { onMount } from 'svelte';
	import { mobile } from '../utils/media';
	onMount(() => {
		console.log(screen);
		console.log(mobile);
		const content = document.getElementById('content');
		content.scrollBy(260, 0);
		content.style.scrollBehavior = 'smooth';
	});
</script>

<div class="topnav">
	<NavBar />
	<slot />
	<Footer />
</div>

<style lang="scss">
</style>
