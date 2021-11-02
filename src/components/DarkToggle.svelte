<script lang="ts">
	import { writable } from 'svelte-local-storage-store';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	export const preferences = writable('preferences', {
		theme: 'light',
		mobile: false
	});

	onMount(() => {
		console.log(checkMobile());
		preferences.subscribe((preferences) => {
			document.body.classList.remove('light', 'dark');
			document.body.classList.add(`${preferences.theme}`);
		});
		preferences.set({
			theme: get(preferences).theme,
			mobile: get(preferences).mobile
		});
	});
	var mobile = get(preferences).mobile;
	function checkMobile() {
		try {
			if (window.innerWidth < 768) {
				preferences.update((preferences) => {
					return {
						...preferences,
						mobile: true
					};
				});
			} else {
				preferences.update((preferences) => {
					return {
						...preferences,
						mobile: false
					};
				});
			}
		} catch (e) {
			console.log(e);
		}
	}
</script>

<svelte:window on:resize={checkMobile} />
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
