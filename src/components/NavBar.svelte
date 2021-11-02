<script>
	import DarkToggle from '../components/DarkToggle.svelte';
	import { NavItems } from './NavItems';
	import '../tailwind.css';
	import { mobile } from '../utils/checkMobile';

	let show = false;

	function toggleMenu() {
		if (mobile) {
			show = !show;
		}

		console.log(show);
	}
</script>

<nav>
	<div class="navbar">
		{#each NavItems as item}
			<a class="navbar-link" href={item.href}> {item.name}</a>
		{/each}
		<DarkToggle />
	</div>
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
					<a class="mobile-nav-item" href={item.href}> {item.name}</a>
				</li>
			{/if}
		{/each}
	</div>
</nav>

<!-- 
	This is going to me trying to make a dropdown menu navbar
 -->
<style lang="postcss">
</style>
