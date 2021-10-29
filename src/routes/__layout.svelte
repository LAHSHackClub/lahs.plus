<script>
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import MobileSidebar from '../components/MobileSidebar.svelte';
	import { onMount } from 'svelte';
	let mobile = false;
	function openSidebar() {
		const content = document.getElementById('content');
		content.scrollBy(0, 0);
		content.style.scrollBehavior = 'smooth';
	}
	onMount(() => {
		const screen = window.innerWidth;
		if (screen < 768) {
			mobile = true;
		}
		console.log(screen);
		console.log(mobile);
		const content = document.getElementById('content');
		content.scrollBy(260, 0);
		content.style.scrollBehavior = 'smooth';
	});
</script>

<div class="app">
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
	}
	main {
		max-height: 100%;
		min-width: 100%;
		overflow: auto;
		scroll-snap-align: end;
		scroll-snap-stop: always;
	}
</style>
