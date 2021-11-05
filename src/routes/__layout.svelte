<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	import { checkMobile } from '../utils/checkMobile';
	onMount(() => {
		console.log(screen);
	});
</script>

<svelte:window on:resize={checkMobile} />

<div class="topnav">
	<NavBar />
	<slot />
	<Footer />
</div>

<style lang="scss">
</style>
