<script>
	import DarkToggle from '../components/DarkToggle.svelte';
	import MobileNav from './MobileNav.svelte';
	export const NavItems = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Map',
			href: '/map'
		},
		{
			name: 'News',
			href: '/news'
		},
		{
			name: 'Calendar',
			href: '/calendar'
		},
		{
			name: 'Clubs',
			href: '/clubs'
		},
		{
			name: 'Resources',
			href: '/resources'
		},
		{
			name: 'About',
			href: '/about'
		}
	];
</script>

<nav>
	<!-- if not mobile render  -->
	<div class="navbar">
		{#each NavItems as item}
			<a class="navbar-link" href={item.href}> {item.name}</a>
		{/each}
		<DarkToggle />
	</div>
</nav>

<style>
</style>
