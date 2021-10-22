<script>
	const NavItems = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Map',
			href: '/map'
		}
	];
</script>

<nav>
	<div class=" bg-lahs-blue border-2 border-gray-300 rounded-lg shadow-lg p-5 z-0 ">
		{#each NavItems as item}
			<a class=" pl-2 mr-2 text-white font-semibold" href={item.href}> {item.name}</a>
		{/each}
	</div>
</nav>

<style>
</style>
