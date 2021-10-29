<script>
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import MobileSidebar from '../components/MobileSidebar.svelte';
	import { onMount } from 'svelte';
	function openSidebar() {
		const content = document.getElementById('content');
		content.scrollBy(0, 0);
		content.style.scrollBehavior = 'smooth';
	}
	onMount(() => {
		const content = document.getElementById('content');
		content.scrollBy(260, 0);
		content.style.scrollBehavior = 'smooth';
	});
</script>

<!-- <NavBar /> -->
<div class="app">
	<NavBar />
	<div id="content">
		<MobileSidebar />
		<main><slot /></main>
		<Footer />
	</div>
</div>

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
		&::-webkit-scrollbar {
			display: none;
		}
	}
	main {
		max-height: 100%;
		min-width: 100%;
		overflow: auto;
		scroll-snap-align: end;
		scroll-snap-stop: always;
	}
</style>
