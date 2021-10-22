<script>
	import '../tailwind.css';
	let phone = 'temp';
	//set local storage var for dark mode called theme'
	import darkToggle from './__layout.svelte';
</script>

<slot name="header" />

<div class=" mx-auto   ">
	<button class="" on:click={darkToggle}> Dark Mode </button>
	<h1 class="text-gray-900 dark:text-gray-200">Hello World</h1>
</div>

<style lang="postcss">
</style>
