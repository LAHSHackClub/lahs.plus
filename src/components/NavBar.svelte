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
	<div class="flex justify-between bg-lahs-blue border-b border-gray-300 rounded-md shadow-md p-5 z-0">
		{#each NavItems as item}
			<a class="hover:bg-lahs-blue-700 text-2xl tracking-wide p4 mr-1 text-white font-semibold" href={item.href}> {item.name}</a>
		{/each}
		<svg class="w-8 h-8 stroke-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 20, 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
		
	</div>
</nav>

<style>
</style>
