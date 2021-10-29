<script>
	import DarkToggle from '../components/DarkToggle.svelte';
	import { NavItems } from './NavItems';
</script>

<nav>
	<div class="navbar">
		{#each NavItems as item}
			<a class="navbar-link" href={item.href}> {item.name}</a>
		{/each}
		<DarkToggle />
	</div>
</nav>

<style>
</style>
