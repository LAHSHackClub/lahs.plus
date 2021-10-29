<script lang="ts">
	import { NavItems } from './NavItems';
	import '../tailwind.css';
	import DarkToggle from './DarkToggle.svelte';
	function closeSidebar() {
		document.getElementById('sidebar').parentElement.scrollBy(260, 0);
	}
</script>

<div id="sidebar">
	<div class="flex flex-col items-center h-full mr-2">
		<button
			class="ml-auto p-1 mt-1 hover:bg-lahs-blue-hover transition-all duration-200 ease-linear "
			on:click={closeSidebar}
		>
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
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
		<div class="ml-auto">
			<DarkToggle mobile={true} />
		</div>
		{#each NavItems as item}
			<a href={item.href} class="flex flex-col p-1 font-semibold ">{item.name}</a>
		{/each}
	</div>
</div>

<style lang="scss">
	#sidebar {
		@apply bg-lahs-blue;
		min-width: 200px;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		max-height: 100%;
		&:-webkit-scrollbar {
			display: none;
		}
	}
</style>
