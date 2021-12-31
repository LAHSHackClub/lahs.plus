<script lang="ts">
	import Nav from './_nav.svelte';
	import NavCover from './_nav.scroll-cover.svelte';
	import NavPrompter from './_nav.prompter.svelte';
	import Footer from '../components/Footer.svelte';

	import { onMount } from 'svelte';
	import { checkMobile } from '../utils/checkMobile';
	onMount(() => {
		console.log(screen);
	});

	let main: HTMLElement;
	let content: HTMLElement;
	let scrollX = 0, scrollY = 0;
	function updScroll() {
		scrollX = main.scrollLeft;
		scrollY = content.scrollTop;
	}
</script>

<svelte:window on:resize={checkMobile} />

<main on:scroll={updScroll} bind:this={main}>
	<Nav main={main} />
	<div class="content container" on:scroll={updScroll} bind:this={content}>
		<NavPrompter show={scrollX > 50} main={main} scroll={scrollY} />
		<NavCover show={scrollX < 50} main={main} scroll={scrollY} />
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
		height: 100vh;
		width: 100vw;

		@media (min-width: 768px) {
			flex-direction: column;
		}
	}

	.content {
		flex: 1 1;
		position: relative;
	}

	@media (max-width: 768px) {
		.content {
			scroll-snap-align: start;
			scroll-snap-stop: always;
			padding: 1rem;
			min-width: 100vw;
			width: 100vw;
			overflow-y: auto;
		}
	}
</style>
