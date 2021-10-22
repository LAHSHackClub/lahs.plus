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
			href: '/calendar'
		},
		{
			name: 'About',
			href: '/about'
		}
	];
</script>

<nav>
	<div class="navbar ">
		<div class="">
			{#each NavItems as item}
				<a class="navbar-link" href={item.href}> {item.name}</a>
			{/each}
		</div>
	</div>
</nav>

<style>
</style>
