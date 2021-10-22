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
	function darkToggle() {
		if (localStorage.getItem('theme') === 'dark') {
			localStorage.setItem('theme', 'light');
			document.documentElement.setAttribute('data-theme', 'light');
		} else {
			localStorage.setItem('theme', 'dark');
			document.documentElement.setAttribute('data-theme', 'dark');
		}
	}
</script>

<nav>
	<div class="navbar ">
		{#each NavItems as item}
			<a class="navbar-link" href={item.href}> {item.name}</a>
		{/each}
		<button class="navbar-link ml-auto" on:click={darkToggle}>Dark Mode</button>
	</div>
</nav>

<style>
</style>
