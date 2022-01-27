<script lang="ts">
	import DarkToggle from "$lib/DarkToggle.svelte";
	import { NavItems } from "$lib/NavItems";
	let show = true;
	export let main: HTMLElement;
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
			<DarkToggle />
			<button class="navbar-mobile-toggle-icon" on:click={() => main.scrollBy(250, 0)}>
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
		</div>
		{#each NavItems as item}
			{#if show}
				<li>
					<a class="mobile-nav-item" href={item.href} on:click={() => main.scrollBy(250, 0)}>
						{item.name}
					</a>
				</li>
			{/if}
		{/each}
	</div>
</nav>

<style lang="scss">
	nav {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	.navbar {
		@apply bg-lahs-blue border-gray-200 dark:border-gray-800 shadow-lg z-0;
		@apply p-5 pb-0 pt-0;
		@apply flex flex-row;
	}

	.navbar-link {
		@apply rounded-none hover:rounded-md hover:shadow-lg px-4 p-2 hover:bg-lahs-blue-hover;
		@apply text-center text-white font-semibold hover:text-gray-200 dark:text-gray-200;
		@apply transition-all duration-200 ease-linear;
	}

	@media (min-width: 768.1px) {
		.navbar-mobile {
			display: none;
		}
		.navbar-mobile-toggle {
			display: none;
		}
		.navbar-link {
			@apply flex;
		}
	}

	@media (max-width: 768px) {
		.navbar {
			display: none;
		}
		.navbar-link {
			display: none;
		}
		.navbar-mobile {
			@apply list-none flex-col p-2 m-2;
		}
		.navbar-mobile-toggle-icon {
			@apply p-2  mr-auto  ease-linear;
		}
		.navbar-mobile-toggle {
			@apply p-0 m-0 ease-linear;
		}
		.mobile-nav-item {
			@apply bg-lahs-blue border-2 border-gray-200 dark:border-gray-800 rounded-lg shadow-lg text-white px-5 z-0 flex flex-row pb-2 pt-2;
		}
	}

	.navbar .container {
		display: flex;
	}

	.navbar-mobile {
		width: 250px;
	}
</style>
