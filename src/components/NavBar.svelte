<script>
	const NavItems = [
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
	<div class="navbar ">
		{#each NavItems as item}
			<a class="navbar-link" href={item.href}> {item.name}</a>
		{/each}
	</div>
</nav>

<style>
</style>
