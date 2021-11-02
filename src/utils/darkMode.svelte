<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { preferences } from './store';
	onMount(() => {
		preferences.subscribe((preferences) => {
			document.body.classList.remove('light', 'dark');
			document.body.classList.add(`${preferences.theme}`);
		});
		preferences.set({
			theme: get(preferences).theme,
			mobile: get(preferences).mobile
		});
	});
</script>
