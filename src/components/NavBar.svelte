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
	<div class="navbar">
		{#each NavItems as item}
			<li class="navbar-item">
				<a class="navbar-link" href={item.href}> {item.name}</a>
			</li>
		{/each}
	</div>
</nav>

<style>
	.navbar {
		background-color: antiquewhite;
		overflow: hidden;
	}
	.navbar-item {
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}
	.navbar-link {
		text-decoration: none;
		color: black;
	}
</style>
