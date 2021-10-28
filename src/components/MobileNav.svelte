<script lang="ts">
	import NavItems from './NavBar.svelte';
	export let open = false;
</script>

<aside class="absolute w-full h-full bg-gray-300 dark:bg-gray-800 navbar-mobile" class:open>
	<div>Hello</div>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}
	.open {
		left: 0;
	}
</style>
