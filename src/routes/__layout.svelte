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

<main>
	<NavBar />
	<div class="content container">
		<slot />
		<Footer />
	</div>
</main>

<style lang="scss" global>
	main {
		display: flex;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
		overflow-x: auto;
		width: 100vw;

		@media (min-width: 768px) {
			flex-direction: column;
		}
	}

	.content {
		scroll-snap-align: start;
		scroll-snap-stop: always;
		padding: 1rem;
		min-width: 100vw;
		width: 100vw;
		overflow-y: auto;
	}
</style>
