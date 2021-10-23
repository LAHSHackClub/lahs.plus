<script lang="ts" context="module">
	import { onMount } from 'svelte';
	function darkToggle() {
		if (localStorage.getItem('dark') == 'true') {
			localStorage.setItem('theme', 'light');
			document.body.classList.remove('dark');
		}
		if (localStorage.getItem('theme') === 'dark') {
			localStorage.setItem('theme', 'light');
			document.body.classList.remove('dark');
			document.body.classList.add('light');
			return 'light';
		} else {
			localStorage.setItem('theme', 'dark');
			document.body.classList.remove('light');
			document.querySelector('body').classList.add('dark');
			return 'dark';
		}
	}
	onMount(() => {
		darkToggle();
	});
</script>

<button class="navbar-link ml-auto " on:click={darkToggle}>
	{#if darkToggle() === 'dark'}
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
		</svg>
	{/if}
	{#if darkToggle() === 'light'}
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
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	{/if}
</button>
