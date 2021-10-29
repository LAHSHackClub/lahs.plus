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

{#if mobile}
	<div class="app">
		<div id="content">
			<MobileSidebar />
			<main><slot /></main>
			<Footer />
		</div>
	</div>
{:else}
	<div class="topnav">
		<NavBar />
		<slot />
		<Footer />
	</div>
{/if}

<style lang="scss">
	.app {
		height: 100%;
	}

	#content {
		display: flex;
		flex: 1 1;
		overflow: scroll;
		scroll-snap-type: x mandatory;
		width: 100%;
		scrollbar-width: none;
	}
	main {
		max-height: 100%;
		min-width: 100%;
		overflow: auto;
		scroll-snap-align: end;
		scroll-snap-stop: always;
	}
</style>
