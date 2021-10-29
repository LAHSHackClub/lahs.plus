<script lang="ts">
	import { writable } from 'svelte-local-storage-store';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	export let mobile = false;
	import { update_await_block_branch } from 'svelte/internal';
	export const preferences = writable('preferences', {
		theme: 'light'
	});
	onMount(() => {
		preferences.subscribe((preferences) => {
			document.body.classList.remove('light', 'dark');
			document.body.classList.add(`${preferences.theme}`);
		});
	});
	const theme = get(preferences).theme;
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
