<script>
	import DarkToggle from '../components/DarkToggle.svelte';
	import { NavItems } from './NavItems';
	import '../tailwind.css';
	import { scale } from 'svelte/transition';

	let menu = null;
	let show = false;
</script>

<nav>
	<div class="navbar">
		{#each NavItems as item}
			<a class="navbar-link" href={item.href}> {item.name}</a>
		{/each}

		<DarkToggle />
	</div>
	<div class="navbar-mobile">
		<button
			on:click={() => {
				show = !show;
				console.log(show);
			}}
		>
			Button
			<div class="mobile-nav-items">
				{#each NavItems as item}
					<li>
						<a class="mobile-nav-item" href={item.href}> {item.name}</a>
					</li>
				{/each}
			</div>
		</button>
	</div>
</nav>

<!-- 
	This is going to me trying to make a dropdown menu navbar
 -->
<style lang="postcss">
	.navbar-mobile {
		display: none;
		@apply md:flex sm:flex;
	}
	.navbar {
		@apply md:hidden;
	}

	.mobile-nav-items {
		@apply md:flex p-2 m-2;
		display: flex;
		flex-direction: column;
	}
	li {
		list-style: none;
	}
</style>
