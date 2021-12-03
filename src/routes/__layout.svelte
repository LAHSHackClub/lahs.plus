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
	</div>
	<Footer />
</main>

<style lang="scss" global>
	main {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.container {
		max-width: 2000px;
		margin: 0 auto;
	}

	.content {
		padding: 1rem;
		width: 100%;
		overflow-y: auto;
	}
</style>
