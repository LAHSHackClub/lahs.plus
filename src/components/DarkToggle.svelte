<script lang="ts">
	import { preferences } from '../utils/store';
	import { checkMobile, mobile } from '../utils/checkMobile';
	import DarkMode from '../utils/darkMode.svelte';
</script>

{#if !mobile}
	<button
		class="navbar-link ml-auto "
		on:click={() =>
			preferences.update((preferences) => ({
				...preferences,
				theme: preferences.theme === 'light' ? 'dark' : 'light'
			}))}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
		</svg>
	</button>
{/if}
<svelte:window on:resize={checkMobile} />

{#if mobile}
	<button
		class=" mr-auto ml-auto p-1 mt-1 hover:bg-lahs-blue-hover  transition-all duration-200 ease-linear "
		on:click={() =>
			preferences.update((preferences) => ({
				...preferences,
				theme: preferences.theme === 'light' ? 'dark' : 'light'
			}))}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
		</svg>
	</button>
{/if}

<DarkMode />
