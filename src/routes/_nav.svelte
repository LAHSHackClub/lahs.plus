
<script lang="ts">
	import DarkToggle from '../components/DarkToggle.svelte';
	import { NavItems } from '../components/NavItems';
	import '../tailwind.css';
	import { mobile } from '../utils/checkMobile';
	let show = true;

	export let main: HTMLElement;
	function toggleMenu() {
		show = !show;
	}
</script>

<nav class="navbar">
	<div class="container">
		{#each NavItems as item}
			<a class="navbar-link" href={item.href}> {item.name}</a>
		{/each}
		<DarkToggle />
	</div>
</nav>
<nav>
	<div class="navbar-mobile" id="navbar-mobile">
		<div class="navbar-mobile-toggle">
			<button class="navbar-mobile-toggle-icon" on:click={toggleMenu}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			<DarkToggle />
		</div>
		{#each NavItems as item}
			{#if show}
				<li>
					<a class="mobile-nav-item" href={item.href} on:click={()=>main.scrollBy(250, 0)}> {item.name}</a>
				</li>
			{/if}
		{/each}
		<svg
			class="w-8 h-8 stroke-2 fill-current text-white"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0, 0, 20, 20"
			><path
				d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
			/></svg
		>
	</div>
</nav>

<style lang="scss">
	nav {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
	
	.navbar .container {
		display: flex;
	}

	.navbar-mobile {
		width: 250px;
	}
</style>
